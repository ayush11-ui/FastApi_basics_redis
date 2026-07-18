# FastApi_basics_redis

This workspace contains a minimal full-stack starter with:

- A FastAPI backend that serves a hello-world response
- A React frontend that displays that response

## Run locally

Backend:

```bash
cd backend
python -m uvicorn app.main:app --app-dir . --host 127.0.0.1 --port 8000
```

Frontend:

```bash
cd frontend
npm install
npm run dev -- --host 127.0.0.1
```

The frontend calls the backend API at /api/hello.
