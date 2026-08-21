import traceback
# Trigger reload for .env change
import subprocess
import atexit
import signal
from dotenv import load_dotenv

load_dotenv(".env")

from fastapi import FastAPI, HTTPException, Request, BackgroundTasks
from fastapi.responses import PlainTextResponse, JSONResponse
from starlette.middleware.sessions import SessionMiddleware
from starlette.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from routes.automations import limiter
import routes
import os
import logging
import uvicorn

# Global reference to MCP subprocess
mcp_process = None
from services.webhook import process_whatsapp_webhook
from routes.create_plan import router as plan_router

# from routes.workflows import router as enhanced_workflow_router
import uuid
import time
from utils.logger import (
    get_logger,
    log_event,
    setup_central_logging,
    set_log_context,
    clear_log_context,
)
from utils.request_meta import get_client_ip

# Configure centralized structured logging
setup_central_logging()
logger = get_logger(__name__)


def _is_truthy(value: str) -> bool:
    return (value or "").strip().lower() in {"1", "true", "yes", "on"}


def create_app() -> FastAPI:
    app = FastAPI(title="Whatsease CRM", version="1.0.0")
    app.router.redirect_slashes = False

    @app.middleware("http")
    async def structured_logging_middleware(request: Request, call_next):
        clear_log_context()
        request_id = request.headers.get("x-request-id") or str(uuid.uuid4())
        
        # Check query params for user_id or phone if present
        query_params = request.query_params
        user_id = query_params.get("user_id")
        phone = query_params.get("phone") or query_params.get("phone_number") or query_params.get("from")

        # Try extracting user_id from Authorization header if present
        auth_header = request.headers.get("authorization")
        if not user_id and auth_header and auth_header.startswith("Bearer "):
            try:
                from jose import jwt
                token = auth_header.split(" ")[1]
                secret = os.getenv("JWT_SECRET")
                algo = os.getenv("ALGORITHM", "HS256")
                payload = jwt.decode(token, secret, algorithms=[algo], options={"verify_signature": False})
                user_id = payload.get("sub") or payload.get("id")
            except Exception:
                pass

        set_log_context(
            request_id=request_id,
            user_id=user_id,
            phone=phone
        )

        start_time = time.perf_counter()
        try:
            response = await call_next(request)
            
            # Log request completion with status code
            log_event(
                logger, logging.INFO, "info_event", f"HTTP {request.method} {request.url.path} - {response.status_code}",
                extra={
                    "method": request.method,
                    "path": request.url.path,
                    "status_code": response.status_code,
                    "client_ip": get_client_ip(request),
                }
            )
            response.headers["X-Request-ID"] = request_id
            return response
        except Exception as exc:
            log_event(
                logger, logging.ERROR, "error_event", f"HTTP {request.method} {request.url.path} - Unhandled Exception: {exc}",
                exc_info=True,
                extra={
                    "method": request.method,
                    "path": request.url.path,
                    "status_code": 500,
                    "client_ip": get_client_ip(request),
                }
            )
            raise
        finally:
            clear_log_context()

    @app.middleware("http")
    async def normalize_trailing_slash(request: Request, call_next):
        path = request.scope.get("path", "")
        if path and path != "/" and path.endswith("/"):
            normalized_path = path.rstrip("/")
            request.scope["path"] = normalized_path
            request.scope["raw_path"] = normalized_path.encode("utf-8")
        return await call_next(request)

    # Add rate limiter state and exception handler
    app.state.limiter = limiter
    app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

    # Add CORS middleware to allow cross-origin requests
    cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000")
    cors_origins_list = [origin.strip() for origin in cors_origins.split(",") if origin.strip()]
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=cors_origins_list,
        allow_credentials=True,
        allow_methods=["*"],  # Allows all methods
        allow_headers=["*"],  # Allows all headers
    )

    # Add session middleware for OAuth
    app.add_middleware(SessionMiddleware, secret_key=os.getenv("SESSION_SECRET"))
    app.include_router(routes.router)
    # app.include_router(instagram_router)

    return app


app = create_app()


@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "whatsease-aws", "runtime": "lambda-fastapi"}

async def resume_workflow_from_cta_click(phone: str, token: str, platform_account_id: str, title: str):
    import logging
    from utils.logger import get_logger, log_event
    logger = get_logger(__name__)
    try:
        from services.work_flow_service import handle_whatsapp_workflow
        from utils.db import get_collection
        from bson import ObjectId
        import uuid

        log_event(logger, logging.INFO, "info_event", f"🔄 [CTA CLICK RESUME] Resuming workflow for phone={phone}, token={token}, platform_account_id={platform_account_id}")

        collections_dict = {
            "automations_collection": await get_collection("automations"),
            "messages_collection": await get_collection("messages"),
            "platform_accounts_collection": await get_collection("platform_accounts"),
            "contacts_v2": await get_collection("contacts_v2"),
            "workflow_logs_collection": await get_collection("workflow_executions"),
            "workflow_executions": await get_collection("workflow_executions"),
            "visitor_records": await get_collection("visitor_records"),
        }

        # Get platform account to retrieve wba_id
        platform_account = await collections_dict["platform_accounts_collection"].find_one(
            {"_id": ObjectId(platform_account_id)}
        )
        if not platform_account:
            log_event(logger, logging.WARNING, "warning_event", f"⚠️ [CTA CLICK RESUME] Platform account {platform_account_id} not found")
            return

        wba_id = platform_account.get("whatsapp_data", {}).get("whatsapp_business_account_id")
        if not wba_id:
            log_event(logger, logging.WARNING, "warning_event", f"⚠️ [CTA CLICK RESUME] WABA ID not found for platform account {platform_account_id}")
            return

        # Execute handle_whatsapp_workflow to resume
        await handle_whatsapp_workflow(
            collections=collections_dict,
            wba_id=wba_id,
            message_text=title or "Call us",
            sender_phone=phone,
            sender_name="Customer",
            message_data={
                "id": f"cta-click-{uuid.uuid4().hex}",
                "text": title or "Call us",
                "from": phone,
                "type": "interactive_button_reply",
                "interactive_data": {
                    "button_id": token,
                    "button_title": title or "Call us",
                },
            },
            platform_account_id=platform_account_id,
        )
        log_event(logger, logging.INFO, "info_event", f"✅ [CTA CLICK RESUME] Successfully triggered workflow resume for phone={phone}")
    except Exception as e:
        log_event(logger, logging.ERROR, "error_event", f"❌ [CTA CLICK RESUME] Error resuming workflow: {e}", exc_info=True)

@app.get("/wa/call/{phone_number:path}")
async def wa_call_redirect(
    phone_number: str,
    background_tasks: BackgroundTasks,
    phone: str = None,
    token: str = None,
    platform_account_id: str = None,
    title: str = None,
):
    from fastapi.responses import HTMLResponse
    import html
    safe_phone_number = html.escape(phone_number)
    if phone and token and platform_account_id:
        background_tasks.add_task(
            resume_workflow_from_cta_click,
            phone,
            token,
            platform_account_id,
            title
        )

    content = f"""
    <html>
    <head>
        <meta http-equiv="refresh" content="0;url=tel:{safe_phone_number}">
        <script>window.location.href = "tel:{safe_phone_number}";</script>
    </head>
    <body style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f7f9fa; color: #333;">
        <div style="text-align: center; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); max-width: 90%;">
            <h2 style="color: #075e54; margin-bottom: 8px;">Connecting Call...</h2>
            <p>Dialing {safe_phone_number}...</p>
            <p style="font-size: 14px; color: #666; margin-top: 16px;">If the dialer doesn't open automatically, <a href="tel:{safe_phone_number}" style="color: #128c7e; font-weight: bold; text-decoration: none;">click here</a>.</p>
        </div>
    </body>
    </html>
    """
    return HTMLResponse(content=content)


@app.on_event("startup")
async def startup_event():
    # Initialize lead automation event listeners
    from leads.lead_automation_listener import init_lead_automation
    init_lead_automation()
    log_event(logger, logging.INFO, "info_event", "✓ Lead automation event listeners registered")

    # Ensure superadmin exists from ENV
    from services.admin_service import get_or_create_superadmin
    await get_or_create_superadmin()
    
    # Initialize Firebase for push notifications
    from services.firebase_service import FirebaseService
    firebase_initialized = await FirebaseService.initialize()
    if firebase_initialized:
        log_event(logger, logging.INFO, "info_event", "✓ Firebase push notifications enabled")
    else:
        log_event(logger, logging.WARNING, "warning_event", "Firebase not configured - push notifications disabled")

    # Initialize Scheduler for Campaign Retries and Gmail Sync
    from apscheduler.schedulers.asyncio import AsyncIOScheduler
    from services.campaign_retry_service import CampaignRetryService
    from services.campaign_assistant_command_service import CampaignAssistantCommandService
    from services.gmail_sync_service import GmailSyncService
    from services.reminder_scheduler_service import ReminderSchedulerService
    from services.apple_subscription_worker import AppleSubscriptionEventProcessor
    from services.apple_subscription_reconciliation import AppleSubscriptionReconciliationService
    import pytz
    from datetime import datetime, timedelta

    reminder_service = ReminderSchedulerService()
    try:
        await reminder_service.ensure_indexes()
        log_event(logger, logging.INFO, "info_event", "✓ Ensured automation_reminders indexes")
    except Exception as e:
        log_event(logger, logging.WARNING, "warning_event", f"Failed to ensure automation_reminders indexes: {e}")

    # Add TTL index for audit_logs (activity logs) - 90 days
    try:
        from utils.db import get_collection
        audit_col = await get_collection("audit_logs")
        await audit_col.create_index("timestamp", expireAfterSeconds=7776000)
        log_event(logger, logging.INFO, "info_event", "✓ Ensured audit_logs TTL index (90 days)")
    except Exception as e:
        log_event(logger, logging.WARNING, "warning_event", f"Failed to ensure audit_logs TTL index: {e}")

    run_scheduler = _is_truthy(os.getenv("RUN_SCHEDULER", "1"))
    if not run_scheduler:
        log_event(logger, logging.INFO, "info_event", "RUN_SCHEDULER is disabled. Skipping APScheduler jobs.")
        return

    # Explicitly use pytz.utc to avoid APScheduler errors with zoneinfo/naive datetimes
    scheduler = AsyncIOScheduler(timezone=pytz.utc)
    retry_service = CampaignRetryService()
    campaign_assistant_command_service = CampaignAssistantCommandService()
    gmail_sync_service = GmailSyncService()
    apple_worker = AppleSubscriptionEventProcessor()
    apple_reconciliation = AppleSubscriptionReconciliationService()
    
    # Run campaign retries every 10 minutes
    scheduler.add_job(
        retry_service.process_campaign_retries, 
        "interval", 
        minutes=10, 
        id="campaign_retry_job",
        replace_existing=True
    )
    scheduler.start()
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for campaign retries")
    
    scheduler.add_job(
        campaign_assistant_command_service.process_pending,
        "interval",
        minutes=1,
        id="campaign_assistant_command_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(seconds=20),
    )
    log_event(logger, logging.INFO, "info_event", "Campaign assistant continuation worker scheduled every minute")

    # Run queue cleanup every 10 minutes (offset by 5 mins from retry job)
    scheduler.add_job(
        retry_service.process_campaign_queue_cleanup,
        "interval",
        minutes=10,
        id="campaign_queue_cleanup_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(minutes=5)
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for campaign queue cleanup")
    
    # Run Gmail sync every 5 minutes to fetch new messages
    scheduler.add_job(
        gmail_sync_service.sync_all_gmail_accounts,
        "interval",
        minutes=5,
        id="gmail_sync_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(seconds=30)  # Start after 30 seconds
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for Gmail auto-sync (every 5 minutes)")

    scheduler.add_job(
        apple_worker.process_pending_jobs,
        "interval",
        minutes=1,
        id="apple_subscription_worker_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(seconds=60),
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for Apple subscription job processor (every 1 minute)")

    scheduler.add_job(
        apple_reconciliation.run,
        "interval",
        hours=6,
        id="apple_subscription_reconciliation_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(minutes=20),
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for Apple subscription reconciliation (every 6 hours)")

    # Run workflow reminder scheduler every 1 minute
    scheduler.add_job(
        reminder_service.process_due_reminders,
        "interval",
        minutes=1,
        id="automation_reminder_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(seconds=45),
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for automation reminders (every 1 minute)")

    from services.appointment_reminder_service import AppointmentReminderService

    appointment_reminder_service = AppointmentReminderService()
    try:
        await appointment_reminder_service.ensure_indexes()
        log_event(logger, logging.INFO, "info_event", "✓ Ensured appointment_reminders indexes")
    except Exception as e:
        log_event(logger, logging.WARNING, "warning_event", f"Failed to ensure appointment_reminders indexes: {e}")

    scheduler.add_job(
        appointment_reminder_service.process_due_reminders,
        "interval",
        minutes=1,
        id="appointment_reminder_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(seconds=50),
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for appointment reminders (every 1 minute)")

    # Run journey engine tick every 1 minute — advances `wait` steps, times out
    # `wait_for_reply` steps in installed journeys (cart recovery, COD verify, etc.)
    try:
        from services.journey_engine.engine import JourneyEngine

        async def _journey_tick_job():
            result = await JourneyEngine.process_due_instances(batch_size=200)
            if result.get("processed") or result.get("timed_out"):
                log_event(
                    logger, logging.INFO, "info_event", f"[JourneyTick] processed={result.get('processed')} "
                    f"timed_out={result.get('timed_out')}"
                )

        scheduler.add_job(
            _journey_tick_job,
            "interval",
            minutes=1,
            id="journey_engine_tick_job",
            replace_existing=True,
            next_run_time=datetime.now(pytz.utc) + timedelta(seconds=50),
        )
        log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for journey engine tick (every 1 minute)")
    except Exception as e:
        log_event(logger, logging.WARNING, "warning_event", f"Failed to start journey engine tick scheduler: {e}")

    # Run cart abandonment detector every 5 minutes — finds orders placed but
    # not paid within 15 min and fires cart.abandoned (Phase 1.3).
    try:
        from services.journey_engine.cart_abandonment_detector import CartAbandonmentDetector

        async def _cart_abandonment_job():
            result = await CartAbandonmentDetector.scan_and_fire()
            if result.get("fired") or result.get("errors"):
                log_event(
                    logger, logging.INFO, "info_event", f"[CartAbandonment] fired={result.get('fired')} "
                    f"skipped={result.get('skipped')} errors={result.get('errors')}"
                )

        scheduler.add_job(
            _cart_abandonment_job,
            "interval",
            minutes=5,
            id="cart_abandonment_job",
            replace_existing=True,
            next_run_time=datetime.now(pytz.utc) + timedelta(seconds=90),
        )
        log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for cart abandonment detector (every 5 minutes)")
    except Exception as e:
        log_event(logger, logging.WARNING, "warning_event", f"Failed to start cart abandonment detector: {e}")

    # Cleanup Firestore realtime collections to avoid unbounded growth.
    scheduler.add_job(
        FirebaseService().cleanup_realtime_collections,
        "interval",
        hours=6,
        id="firebase_realtime_cleanup_job",
        replace_existing=True,
        next_run_time=datetime.now(pytz.utc) + timedelta(minutes=15),
    )
    log_event(logger, logging.INFO, "info_event", "✓ Scheduler started for Firestore realtime cleanup (every 6 hours)")



# @app.on_event("startup")
# async def startup_event():
#     """Start MCP server when FastAPI starts."""
#     start_mcp_server()


# @app.on_event("shutdown")
# async def shutdown_event():
#     """Stop MCP server when FastAPI shuts down."""
#     stop_mcp_server()


@app.post("/wa/webhook")
async def root_post(request: Request):
    """
    Handles webhook processing (POST request)
    """
    try:
        log_event(logger, logging.INFO, "info_event", "POST / - Webhook payload processing")
        body = await request.body()

        # P0 #1 — HMAC webhook signature verification
        from utils.webhook_security import verify_whatsapp_signature

        signature_header = request.headers.get("x-hub-signature-256")
        if not verify_whatsapp_signature(body, signature_header):
            log_event(logger, logging.WARNING, "warning_event", "Webhook signature verification failed — rejecting payload")
            # Return 200 so Meta doesn't retry an invalid signature
            return JSONResponse(
                status_code=200,
                content={"status": "error", "reason": "invalid_signature"},
            )

        event = {
            "requestContext": {"http": {"method": "POST"}},
            "body": body.decode("utf-8"),
            "headers": dict(request.headers),
        }
        return await process_whatsapp_webhook(event)
    except Exception as e:
        log_event(logger, logging.INFO, "info_event", traceback.format_exc())
        return JSONResponse(status_code=500, content={"error": str(e)})


@app.get("/webhook", response_class=PlainTextResponse)
async def verify_webhook(request: Request):
    """Verify webhook during Facebook setup"""
    # Get query parameters directly from request
    params = request.query_params

    # Facebook uses parameters with dots
    hub_mode = params.get("hub.mode")
    hub_verify_token = params.get("hub.verify_token")
    hub_challenge = params.get("hub.challenge")

    # Debug logging to identify issues
    log_event(logger, logging.INFO, "info_event", f"Webhook verification request received")
    log_event(logger, logging.INFO, "info_event", f"  Raw query params: {dict(params)}")
    log_event(logger, logging.INFO, "info_event", f"  Mode: {hub_mode}")
    log_event(logger, logging.INFO, "info_event", f"  Verify token: {hub_verify_token}")
    log_event(logger, logging.INFO, "info_event", f"  Challenge: {hub_challenge}")

    # Use messenger verify token (or whatsapp if not set)
    messenger_verify_token = os.getenv("MESSENGER_VERIFY_TOKEN") or os.getenv(
        "WHATSAPP_VERIFY_TOKEN"
    )
    log_event(logger, logging.INFO, "info_event", f"  Expected token: {messenger_verify_token}")

    # Make sure we have a verify token
    if not messenger_verify_token:
        log_event(logger, logging.ERROR, "error_event", "MESSENGER_VERIFY_TOKEN not set in environment variables")
        return JSONResponse(
            status_code=500, content={"error": "Server configuration error"}
        )

    # Strip any whitespace from tokens to avoid common issues
    if hub_verify_token:
        hub_verify_token = hub_verify_token.strip()
    if messenger_verify_token:
        messenger_verify_token = messenger_verify_token.strip()

    if hub_mode == "subscribe" and hub_verify_token == messenger_verify_token:
        log_event(logger, logging.INFO, "info_event", "Webhook verified successfully")
        # Return the challenge value as plain text with status code 200
        return PlainTextResponse(content=hub_challenge, status_code=200)
    else:
        log_event(logger, logging.WARNING, "warning_event", "Webhook verification failed. Token mismatch.")
        # For security, don't return specific details about the mismatch
        return JSONResponse(status_code=403, content={"error": "Verification failed"})


app.include_router(plan_router)

# Flow Submissions Routes
from routes.flow_submissions import router as flow_submissions_router
app.include_router(flow_submissions_router)

from routes.whatsapp_flows import router as whatsapp_flows_router
app.include_router(whatsapp_flows_router)

# Cron Routes (replaces APScheduler jobs for Lambda deployments)
from routes.cron import router as cron_router
app.include_router(cron_router)

# Notifications Routes (push notifications and device tokens)
from routes.notifications import router as notifications_router
app.include_router(notifications_router)

# CSV Filter Routes
from routes.csv_filter import router as csv_filter_router
app.include_router(csv_filter_router)

# Google Sheets Filter Routes
from routes.google_sheets_filter import router as google_sheets_filter_router
app.include_router(google_sheets_filter_router)

# Dynamic List Routes (Excel upload + Sheets columns for dynamic-list node)
from routes.dynamic_list import router as dynamic_list_router
app.include_router(dynamic_list_router)

# WhatsApp Commerce Routes
from routes.whatsapp_commerce import router as whatsapp_commerce_router
app.include_router(whatsapp_commerce_router)

# User WhatsApp Commerce Routes
from routes.user_whatsapp_commerce import router as user_whatsapp_commerce_router
app.include_router(user_whatsapp_commerce_router)

# Wallet Routes
from routes.wallet import router as wallet_router
app.include_router(wallet_router)

# Admin Wallet Alert Routes
from routes.admin_wallet_alerts import router as admin_wallet_alerts_router
app.include_router(admin_wallet_alerts_router)

# Admin Wallet Management Routes
from routes.admin_wallet import router as admin_wallet_router
app.include_router(admin_wallet_router)

# def start_mcp_server():
#     """Start the whatsease-mcp server as a subprocess without blocking."""
#     import time
#     import sys
#     global mcp_process

#     mcp_port = os.getenv("WHATSEASE_MCP_PORT", "4002")
#     base_url = os.getenv("WHATSEASE_BASE_URL", "http://localhost:8000")

#     # Get current directory for include.json path
#     current_dir = os.path.dirname(os.path.abspath(__file__))
#     include_path = os.path.join(current_dir, "include.json")
    
#     # Use the whatsease-mcp from virtual environment
#     venv_mcp = os.path.join(current_dir, ".venv", "bin", "whatsease-mcp")
#     mcp_command = venv_mcp if os.path.exists(venv_mcp) else "whatsease-mcp"

#     cmd = [mcp_command, "-u", base_url, "-p", mcp_port,
#            "-c", include_path]

#     logger.info(f"Starting whatsease-mcp server using command: {cmd}")

#     try:
#         # Don't capture output - let it stream to console for debugging
#         mcp_process = subprocess.Popen(
#             cmd,
#             # stdout=subprocess.PIPE,
#             # stderr=subprocess.PIPE,
#             # text=True
#         )

#         logger.info(f"Started whatsease-mcp with PID {mcp_process.pid}")

#         # Wait 1–2 seconds to see if it exits immediately
#         time.sleep(2)

#         if mcp_process.poll() is not None:
#             logger.error(f"MCP Server crashed (exit {mcp_process.returncode})")
#             logger.error(f"Check the output above for error details")
#             raise RuntimeError("MCP server failed to start")

#         logger.info("MCP server is running successfully.")
#         return mcp_process

#     except Exception as e:
#         logger.error(f"Failed to start MCP server: {e}")
#         raise


# def stop_mcp_server():
#     """Stop the whatsease-mcp server subprocess."""
#     global mcp_process
#     if mcp_process:
#         logger.info("Stopping whatsease-mcp server...")
#         mcp_process.terminate()
#         try:
#             mcp_process.wait(timeout=5)
#         except subprocess.TimeoutExpired:
#             mcp_process.kill()
#         mcp_process = None
#         logger.info("whatsease-mcp server stopped")


# # Register cleanup on exit
# atexit.register(stop_mcp_server)


# # Add this section to run the app when the file is executed directly
# if __name__ == "__main__":
#     # Handle SIGTERM/SIGINT for graceful shutdown
#     def signal_handler(signum, frame):
#         logger.info("Received shutdown signal...")
#         stop_mcp_server()
#         exit(0)

#     signal.signal(signal.SIGTERM, signal_handler)
#     signal.signal(signal.SIGINT, signal_handler)

#     # Start uvicorn (MCP server will auto-start via startup event)
#     uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
