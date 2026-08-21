import atexit
import base64
import hashlib
import json
import logging
import os
import socket
import subprocess
import time
from typing import Dict, Optional, Tuple

import requests
from dotenv import load_dotenv
from utils.logger import get_logger, log_event, set_log_context, clear_log_context

load_dotenv(".env")

logger = get_logger(__name__)

_mcp_process: Optional[subprocess.Popen] = None


def _resolve_include_path(current_dir: str) -> str:
    configured_path = (os.getenv("WHATSEASE_MCP_INCLUDE_PATH") or "").strip()
    if not configured_path:
        return os.path.join(current_dir, "include.json")

    expanded_path = os.path.expanduser(configured_path)
    if os.path.isabs(expanded_path):
        return expanded_path

    candidates = [
        os.path.abspath(expanded_path),
        os.path.join(current_dir, expanded_path),
    ]
    if expanded_path.startswith("var/"):
        candidates.insert(0, os.path.join("/", expanded_path))

    for candidate in candidates:
        if os.path.exists(candidate):
            log_event(
                logger, logging.WARNING, "warning_event", "Resolved relative MCP include path %s to %s",
                configured_path,
                candidate,
            )
            return candidate

    if expanded_path.startswith("var/"):
        return os.path.join("/", expanded_path)
    return os.path.join(current_dir, expanded_path)


def _inspect_include_config(include_path: str) -> Dict[str, object]:
    if not os.path.exists(include_path):
        raise FileNotFoundError(
            f"MCP include config not found: {include_path}. "
            "Refusing to start MCP without an include file because that can expose the full OpenAPI surface."
        )

    with open(include_path, "rb") as config_file:
        raw = config_file.read()

    try:
        parsed = json.loads(raw.decode("utf-8"))
    except json.JSONDecodeError as exc:
        raise ValueError(f"MCP include config is invalid JSON: {include_path}: {exc}") from exc

    include_entries = parsed.get("include")
    if not isinstance(include_entries, list) or not include_entries:
        raise ValueError(
            f"MCP include config must contain a non-empty include list: {include_path}"
        )

    return {
        "entry_count": len(include_entries),
        "sha256": hashlib.sha256(raw).hexdigest()[:12],
    }


def _build_mcp_command() -> Tuple[list, int, str]:
    current_dir = os.path.dirname(os.path.abspath(__file__))
    mcp_port = int(os.getenv("WHATSEASE_MCP_PORT", "4002"))
    base_url = os.getenv("WHATSEASE_BASE_URL", "http://localhost:8000")
    include_path = _resolve_include_path(current_dir)

    venv_mcp = os.path.join(current_dir, ".venv", "bin", "whatsease-mcp")
    mcp_command = venv_mcp if os.path.exists(venv_mcp) else "whatsease-mcp"

    cmd = [mcp_command, "-u", base_url, "-p", str(mcp_port), "-c", include_path]
    return cmd, mcp_port, include_path


def _warm_backend_openapi(base_url: str) -> None:
    target = f"{base_url.rstrip('/')}/openapi.json"
    attempts = 3
    timeout_seconds = 20
    last_error: Optional[str] = None

    for attempt in range(1, attempts + 1):
        try:
            log_event(
                logger, logging.INFO, "info_event", "Warming backend OpenAPI (attempt %s/%s): %s",
                attempt,
                attempts,
                target,
            )
            response = requests.get(target, timeout=timeout_seconds)
            if response.status_code == 200:
                log_event(logger, logging.INFO, "info_event", "Backend OpenAPI warmup successful")
                return

            last_error = f"status={response.status_code}"
            log_event(logger, logging.WARNING, "warning_event", "Backend OpenAPI warmup returned %s", response.status_code)
        except Exception as exc:
            last_error = str(exc)
            log_event(logger, logging.WARNING, "warning_event", "Backend OpenAPI warmup failed: %s", last_error)

        if attempt < attempts:
            time.sleep(1.0)

    raise RuntimeError(f"Backend OpenAPI warmup failed for {target}: {last_error}")


def _is_port_open(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(0.5)
        return sock.connect_ex(("127.0.0.1", port)) == 0


def start_mcp_server() -> None:
    global _mcp_process

    cmd, mcp_port, include_path = _build_mcp_command()
    include_config = _inspect_include_config(include_path)
    process_env = os.environ.copy()
    # Lambda invocations are not sticky; force stateless mode to avoid session-id coupling.
    process_env["FASTMCP_STATELESS_HTTP"] = "true"

    # whatsease-mcp startup fetches {base_url}/openapi.json with a short timeout.
    # Warm backend first so MCP startup doesn't fail during backend cold starts.
    base_url = os.getenv("WHATSEASE_BASE_URL", "http://localhost:8000")
    _warm_backend_openapi(base_url)

    log_event(
        logger, logging.INFO, "info_event", "MCP lambda config: base_url=%s port=%s include_path=%s include_entries=%s include_sha=%s",
        base_url,
        mcp_port,
        include_path,
        include_config["entry_count"],
        include_config["sha256"],
    )

    # If process exists but isn't serving, recycle it.
    if _mcp_process is not None and _mcp_process.poll() is None:
        if _is_port_open(mcp_port):
            return

        log_event(
            logger, logging.WARNING, "warning_event", "MCP process is running (pid=%s) but port %s is closed; restarting.",
            _mcp_process.pid,
            mcp_port,
        )
        stop_mcp_server()

    startup_errors = []
    attempts = 3
    for attempt in range(1, attempts + 1):
        log_event(
            logger, logging.INFO, "info_event", "Starting MCP server (attempt %s/%s) with command: %s [FASTMCP_STATELESS_HTTP=%s]",
            attempt,
            attempts,
            cmd,
            process_env.get("FASTMCP_STATELESS_HTTP", ""),
        )

        _mcp_process = subprocess.Popen(cmd, env=process_env)

        deadline = time.time() + 14
        while time.time() < deadline:
            if _mcp_process.poll() is not None:
                err = f"MCP server exited early with code {_mcp_process.returncode}"
                startup_errors.append(err)
                log_event(logger, logging.WARNING, "warning_event", err)
                break
            if _is_port_open(mcp_port):
                log_event(logger, logging.INFO, "info_event", "MCP server is listening on 127.0.0.1:%s", mcp_port)
                return
            time.sleep(0.2)

        # Timed out or exited; clean up before retry.
        stop_mcp_server()
        if len(startup_errors) < attempt:
            startup_errors.append("Timed out waiting for MCP server to start")

        if attempt < attempts:
            time.sleep(1.0)

    raise RuntimeError("; ".join(startup_errors))


def stop_mcp_server() -> None:
    global _mcp_process

    if _mcp_process is None:
        return

    if _mcp_process.poll() is None:
        log_event(logger, logging.INFO, "info_event", "Stopping MCP server...")
        _mcp_process.terminate()
        try:
            _mcp_process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            _mcp_process.kill()

    _mcp_process = None


atexit.register(stop_mcp_server)


def _extract_http_request(event: Dict) -> Tuple[str, str, Dict[str, str], bytes]:
    request_context = event.get("requestContext", {})
    http_context = request_context.get("http", {})

    method = (http_context.get("method") or event.get("httpMethod") or "GET").upper()

    raw_path = event.get("rawPath") or event.get("path") or "/"
    raw_query = event.get("rawQueryString") or ""

    if not raw_query and event.get("queryStringParameters"):
        query_items = []
        for key, value in (event.get("queryStringParameters") or {}).items():
            if value is None:
                query_items.append(str(key))
            else:
                query_items.append(f"{key}={value}")
        raw_query = "&".join(query_items)

    headers = dict(event.get("headers") or {})

    body = event.get("body") or b""
    if isinstance(body, str):
        if event.get("isBase64Encoded"):
            body_bytes = base64.b64decode(body)
        else:
            body_bytes = body.encode("utf-8")
    else:
        body_bytes = body

    path_prefix = os.getenv("WHATSEASE_MCP_PATH_PREFIX", "")
    if path_prefix and raw_path.startswith(path_prefix):
        raw_path = raw_path[len(path_prefix) :] or "/"

    url = f"http://127.0.0.1:{os.getenv('WHATSEASE_MCP_PORT', '4002')}{raw_path}"
    if raw_query:
        url = f"{url}?{raw_query}"

    return method, url, headers, body_bytes


def _is_text_response(content_type: str) -> bool:
    normalized = (content_type or "").lower()
    return (
        normalized.startswith("text/")
        or "json" in normalized
        or "xml" in normalized
        or "javascript" in normalized
        or "form-urlencoded" in normalized
    )


def _extract_request_path(event: Dict) -> str:
    return event.get("rawPath") or event.get("path") or "/"


def _extract_query_params(event: Dict) -> Dict[str, str]:
    params = dict(event.get("queryStringParameters") or {})
    raw_query = event.get("rawQueryString") or ""
    if raw_query:
        for part in raw_query.split("&"):
            if not part:
                continue
            if "=" in part:
                key, value = part.split("=", 1)
            else:
                key, value = part, ""
            if key and key not in params:
                params[key] = value
    return params


def _health_response(start_requested: bool = False) -> Dict:
    _, mcp_port, include_path = _build_mcp_command()
    startup_error = None

    if start_requested:
        try:
            start_mcp_server()
        except Exception as exc:
            startup_error = str(exc)

    process_running = _mcp_process is not None and _mcp_process.poll() is None
    port_open = _is_port_open(mcp_port)
    payload: Dict[str, object] = {
        "ok": bool(process_running and port_open),
        "service": "whatsease-mcp-lambda-proxy",
        "start_requested": start_requested,
        "process_running": process_running,
        "port_open": port_open,
        "process_pid": _mcp_process.pid if process_running else None,
        "mcp_port": mcp_port,
        "include_path": include_path,
        "base_url": os.getenv("WHATSEASE_BASE_URL", "http://localhost:8000"),
    }
    if startup_error:
        payload["ok"] = False
        payload["startup_error"] = startup_error

    return {
        "statusCode": 200 if payload["ok"] else 500,
        "headers": {"content-type": "application/json"},
        "body": json.dumps(payload),
        "isBase64Encoded": False,
    }


def lambda_handler(event, context):
    aws_req_id = getattr(context, "aws_request_id", None)
    set_log_context(aws_request_id=aws_req_id)
    try:
        raw_path = _extract_request_path(event)
        log_event(logger, logging.INFO, "info_event", "MCP proxy request received: path=%s", raw_path)
        path_prefix = os.getenv("WHATSEASE_MCP_PATH_PREFIX", "")
        prefixed_health_path = f"{path_prefix}/health" if path_prefix else ""
        if raw_path == "/health" or (prefixed_health_path and raw_path == prefixed_health_path):
            query_params = _extract_query_params(event)
            start_requested = str(query_params.get("start", "")).lower() in {
                "1",
                "true",
                "yes",
                "y",
            }
            return _health_response(start_requested=start_requested)

        start_mcp_server()

        method, url, headers, body = _extract_http_request(event)
        session_header = headers.get("mcp-session-id") or headers.get("Mcp-Session-Id")
        log_event(
            logger, logging.INFO, "info_event", "Forwarding MCP proxy request: method=%s target=%s body_bytes=%s mcp_session_id=%s",
            method,
            url,
            len(body) if body else 0,
            session_header or "-",
        )

        # Do not forward hop-by-hop headers from API Gateway.
        headers.pop("host", None)
        headers.pop("Host", None)
        headers.pop("content-length", None)
        headers.pop("Content-Length", None)

        response = requests.request(
            method=method,
            url=url,
            headers=headers,
            data=body if body else None,
            timeout=60,
        )
        log_event(
            logger, logging.INFO, "info_event", "MCP proxy upstream response: status=%s content_type=%s",
            response.status_code,
            response.headers.get("content-type", ""),
        )
        if response.status_code >= 400:
            log_event(
                logger, logging.ERROR, "error_event", "MCP proxy upstream error body (first 500 chars): %s",
                (response.text or "")[:500],
            )

        response_headers = {
            k: v
            for k, v in response.headers.items()
            if k.lower() not in {"transfer-encoding", "connection", "content-encoding"}
        }

        content_type = response.headers.get("content-type", "")
        if _is_text_response(content_type):
            body_out = response.text
            is_base64_encoded = False
        else:
            body_out = base64.b64encode(response.content).decode("ascii")
            is_base64_encoded = True

        return {
            "statusCode": response.status_code,
            "headers": response_headers,
            "body": body_out,
            "isBase64Encoded": is_base64_encoded,
        }

    except Exception as exc:
        log_event(logger, logging.ERROR, "error_event", "MCP lambda proxy failed", exc_info = True)
        return {
            "statusCode": 500,
            "headers": {"content-type": "application/json"},
            "body": (
                '{"error":"mcp_lambda_failure","detail":"'
                + str(exc).replace('"', "'")
                + '"}'
            ),
            "isBase64Encoded": False,
        }
