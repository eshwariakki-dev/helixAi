from fastapi import FastAPI

app = FastAPI(
    title="HELIX AI",
    description="Connected Decision Intelligence Platform",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {
        "message": "HELIX AI Backend is Running 🚀"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }