# Whatsease API

## Installation instructions

1. Create venv using : `python -m venv '.venv''`
2. activate the newly created venv using the `acitvate` script in `.venv/bin` - in mac and linux and `.venv/Scripts` - in windows
3. install required dependencies - `pip install -r requirements.txt`
4. duplicate `.env.example` and make a new `.env` file by filling appropriate values

## Running instructions

1. Dev mode: `./scripts/run_dev.sh`
2. Prod mode: `.venv/bin/python -m uvicorn main:app`

## Other instructions

- Swagger docs are generated on `/docs` route
- Redoc docs are on: `/redoc`

pycache removal command
find . -type d -name "**pycache**" -exec rm -r {} +

## Cache Clea

find . -type d -name "_pycache_" -exec rm -r {} +
