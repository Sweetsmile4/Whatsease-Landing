import logging
import os
import json
import traceback
import asyncio
from pydantic import BaseModel, ValidationError
from typing import Optional
from services.webhook import verify_webhook, process_whatsapp_webhook
from utils.logger import get_logger, log_event, set_log_context, clear_log_context

logger = get_logger(__name__)


async def handler(event, context):
    """
    AWS Lambda handler for WhatsApp webhook events
    Handles both webhook verification and message processing
    """
    aws_req_id = getattr(context, "aws_request_id", None)
    set_log_context(aws_request_id=aws_req_id)

    try:
        method = event.get("requestContext", {}).get("http", {}).get("method")
        path = event.get("rawPath", "")
        query = event.get("queryStringParameters", {})

        log_event(logger, logging.INFO, "info_event", f"Incoming message lambda request path: {path}", extra={"method": method, "path": path})

        # Health Path
        if method == "GET" and path == "/health":
            return {
                "statusCode": 200,
                "body": "Server is up and running"
            }

        # Check if this is a GET request (webhook verification)
        if method == "GET" and query:
            log_event(logger, logging.INFO, "info_event", "GET request (webhook verification)")
            return verify_webhook(event)
        
        # For POST requests, process the webhook payload
        if method == "POST":
            log_event(logger, logging.INFO, "info_event", "POST request (webhook process)")
            return await process_whatsapp_webhook(event)
        
        # Fallback for non-API Gateway invocations
        return {
            "statusCode": 200,
            "message": "No requestContext found. This is not an API Gateway event.",
            "body": json.dumps({
                "message": "WhatsEase API working",
            })
        }
    finally:
        clear_log_context()


def lambda_handler(event, context):
    loop = asyncio.get_event_loop()

    if loop.is_closed():
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

    return loop.run_until_complete(handler(event, context))

# For local development using uvicorn:
# Run with: uvicorn whatsease-python.src.main:app --reload --port 8000
# (Make sure you are in the root 'whatsease-aws' directory or adjust the path)
