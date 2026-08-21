import logging
import time
from mangum import Mangum
from main import app
from mcp_lambda_function import lambda_handler as mcp_lambda_handler
from services.journey_engine.engine import JourneyEngine
from services.reminder_scheduler_service import ReminderSchedulerService
from utils.logger import get_logger, log_event, set_log_context, clear_log_context

logger = get_logger(__name__)

asgi_handler = Mangum(app, lifespan="off")
mcp_handler = mcp_lambda_handler


def handler(event, context):
    aws_req_id = getattr(context, "aws_request_id", None)
    if isinstance(event, dict) and event.get("task_type") == "automation_reminder":
        set_log_context(aws_request_id=aws_req_id, event_type="automation_reminder")
        try:
            return _handle_reminder_event(event, context)
        finally:
            clear_log_context()
    if isinstance(event, dict) and event.get("task_type") == "journey_tick":
        set_log_context(aws_request_id=aws_req_id, event_type="journey_tick")
        try:
            return _handle_journey_tick_event(event, context)
        finally:
            clear_log_context()

    if aws_req_id:
        set_log_context(aws_request_id=aws_req_id)
    return asgi_handler(event, context)


def _handle_reminder_event(event, context):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        service = ReminderSchedulerService()
        reminders_result = loop.run_until_complete(
            service.process_due_reminders(limit=100)
        )
        log_event(logger, logging.INFO, "info_event", "[LAMBDA] automation_reminder result: %s", reminders_result)

        response = {"reminders": reminders_result}
        try:
            journeys_result = loop.run_until_complete(
                JourneyEngine.process_due_instances(batch_size=200)
            )
            response["journeys"] = journeys_result
            log_event(logger, logging.INFO, "info_event", "[LAMBDA] journey_tick piggyback result: %s", journeys_result)
        except Exception as journey_exc:
            # Keep existing workflow reminders isolated from journey tick failures.
            log_event(
                logger, logging.ERROR, "error_event", "[LAMBDA] journey_tick piggyback failed: %s",
                journey_exc,
                exc_info=True,
            )
            response["journeys_error"] = str(journey_exc)

        return {"statusCode": 200, "body": json.dumps(response)}
    except Exception as e:
        log_event(logger, logging.ERROR, "error_event", "[LAMBDA] automation_reminder failed: %s", e, exc_info=True)
        return {"statusCode": 500, "body": json.dumps({"error": str(e)})}
    finally:
        loop.close()


def _handle_journey_tick_event(event, context):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        result = loop.run_until_complete(
            JourneyEngine.process_due_instances(batch_size=200)
        )
        log_event(logger, logging.INFO, "info_event", "[LAMBDA] journey_tick result: %s", result)
        return {"statusCode": 200, "body": json.dumps(result)}
    except Exception as e:
        log_event(logger, logging.ERROR, "error_event", "[LAMBDA] journey_tick failed: %s", e, exc_info=True)
        return {"statusCode": 500, "body": json.dumps({"error": str(e)})}
    finally:
        loop.close()

lambda_handler = handler
