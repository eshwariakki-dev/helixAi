from fastapi import FastAPI

from app.database.init_db import init_db

from app.api.routes.users import router as user_router
from app.api.routes.incidents import router as incident_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.ai_reports import router as ai_report_router
from app.api.routes.timeline import router as timeline_router

app = FastAPI(
    title="HELIX AI",
    description="Connected Decision Intelligence Platform",
    version="1.0.0"
)


@app.on_event("startup")
def startup():
    init_db()


# Register Routers
app.include_router(user_router)
app.include_router(incident_router)
app.include_router(dashboard_router)
app.include_router(ai_report_router)
app.include_router(timeline_router)

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