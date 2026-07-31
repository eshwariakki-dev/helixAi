from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.services.timeline_service import TimelineService

router = APIRouter(
    prefix="/timeline",
    tags=["Timeline"]
)


@router.get("/{incident_id}")
def get_timeline(
    incident_id: int,
    db: Session = Depends(get_db),
):
    return TimelineService.get_timeline(
        db,
        incident_id,
    )