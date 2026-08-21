# Server Status & Quick Reference

## ✅ Current Status

Both servers are **running and accessible**:

- **FastAPI Server**: `http://localhost:8000` ✅
  - API Docs: http://localhost:8000/docs
  - OpenAPI: http://localhost:8000/openapi.json
  - Process: Running with auto-reload
- **MCP Server**: `http://localhost:4002` ✅
  - MCP Endpoint: http://localhost:4002/mcp
  - Process: Managed by FastAPI startup/shutdown
  - Config: Uses `include.json` for tool exposure

---

## 🚀 Starting the Servers

### Option 1: Using the Startup Script (Recommended)

```bash
cd /Users/adityagarg/Consult\ Anubhav/WhatsEase-AWS/whatsease-aws
./start_servers.sh
```

### Option 2: Manual Start

```bash
cd /Users/adityagarg/Consult\ Anubhav/WhatsEase-AWS/whatsease-aws
source .venv/bin/activate
python3 main.py
```

Both methods will:

1. Start FastAPI on port 8000
2. Auto-start MCP server on port 4002
3. Enable hot-reload for development

---

## 🛑 Stopping the Servers

Press `Ctrl+C` in the terminal where servers are running.

The shutdown sequence will:

1. Catch the interrupt signal
2. Gracefully stop the MCP server
3. Shutdown FastAPI application
4. Clean up resources

---

## 🔍 Checking Server Status

### Check if servers are running:

```bash
lsof -i :8000 -i :4002 | grep LISTEN
```

### Test FastAPI:

```bash
curl http://localhost:8000/docs
```

### Test MCP:

```bash
curl http://localhost:4002/mcp
```

---

## 📋 Environment Variables

These are configured in `.env`:

```bash
# Groq LLM Configuration
GROQ_API_KEY=your_groq_api_key_here
GROQ_BASE_URL=https://api.groq.com/openai/v1
GROQ_MODEL_NAME=llama-3.3-70b-versatile

# MCP Server Configuration
WHATSEASE_MCP_PORT=4002
WHATSEASE_MCP_URL=http://localhost:4002/mcp
WHATSEASE_BASE_URL=http://localhost:8000
```

---

## 🛠️ Architecture

```
┌─────────────────────────────────────────────────┐
│           FastAPI Server (Port 8000)            │
│                                                 │
│  • Startup Event: Launches MCP Server          │
│  • Shutdown Event: Stops MCP Server            │
│  • API Routes: /roovy/*, /automations/*        │
│  • Auto-reload: Enabled for development        │
└────────────────┬────────────────────────────────┘
                 │
                 │ Manages
                 ▼
┌─────────────────────────────────────────────────┐
│           MCP Server (Port 4002)                │
│                                                 │
│  • Subprocess: Launched by FastAPI             │
│  • Tools: Exposed via include.json             │
│  • Endpoints: WhatsApp Flow & Platform APIs    │
│  • Protocol: Model Context Protocol            │
└─────────────────────────────────────────────────┘
```

---

## 📁 Key Files

| File                | Purpose                               |
| ------------------- | ------------------------------------- |
| `main.py`           | FastAPI app with MCP startup/shutdown |
| `start_servers.sh`  | Automated startup script              |
| `include.json`      | MCP tool configuration                |
| `.env`              | Environment variables                 |
| `core/roovy_sys.py` | AI system prompt (modular)            |
| `core/prompts/*.md` | Modular prompt files                  |

---

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9

# Kill process on port 4002
lsof -ti:4002 | xargs kill -9
```

### MCP Server Not Starting

- Verify `whatsease-mcp` is installed: `pip show whatsease-mcp`
- Check `include.json` exists in project root
- Review logs in terminal output

### Virtual Environment Issues

```bash
# Recreate virtual environment
rm -rf .venv
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

---

## 📊 Monitoring

### View Server Logs

Logs are printed to the terminal where `main.py` is running.

Key log messages:

- `Starting whatsease-mcp server using command: [...]`
- `Started whatsease-mcp with PID [number]`
- `MCP server is running successfully.`
- `Uvicorn running on http://0.0.0.0:8000`

### Check Process IDs

```bash
ps aux | grep "python3 main.py"
ps aux | grep "whatsease-mcp"
```

---

## 🎯 Next Steps

1. **Access API Docs**: http://localhost:8000/docs
2. **Test Roovy Chat**: POST to `/roovy/generate`
3. **Create Automations**: Use the WhatsApp Flow endpoints
4. **Monitor Logs**: Watch terminal for MCP tool calls

---

**Last Updated**: December 6, 2025  
**Status**: ✅ Both servers running and operational
