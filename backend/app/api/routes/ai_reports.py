from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.services.ai_report_service import AIReportService

router = APIRouter(
    prefix="/ai-reports",
    tags=["AI Reports"]
)


@router.get("/{incident_id}")
def get_ai_report(
    incident_id: int,
    db: Session = Depends(get_db),
):

    report = AIReportService.get_report_by_incident(
        db,
        incident_id
    )

    if report is None:
        raise HTTPException(
            status_code=404,
            detail="AI report not found"
        )

    return report