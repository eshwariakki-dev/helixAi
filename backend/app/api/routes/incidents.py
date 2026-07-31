from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    Query,
)
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.core.security import (
    require_roles,
)

from app.models.user import User

from app.schemas.incident import IncidentCreate
from app.schemas.decision import IncidentAnalysisResponse
from app.schemas.status import StatusUpdate

from app.services.incident_service import IncidentService

router = APIRouter(
    prefix="/incidents",
    tags=["Incidents"]
)


@router.post("/", response_model=IncidentAnalysisResponse)
def create_incident(
    incident: IncidentCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_roles(
            ["Admin", "Analyst", "Operator"]
        )
    ),
):
    return IncidentService.create_incident(
        db,
        incident,
    )


@router.get("/")
def get_all_incidents(
    sector: str | None = Query(None),
    severity: str | None = Query(None),
    status: str | None = Query(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_roles(
            ["Admin", "Analyst", "Executive"]
        )
    ),
):
    return IncidentService.get_all_incidents(
        db=db,
        sector=sector,
        severity=severity,
        status=status,
    )


@router.get("/{incident_id}")
def get_incident(
    incident_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_roles(
            ["Admin", "Analyst", "Executive"]
        )
    ),
):
    incident = IncidentService.get_incident(
        db,
        incident_id,
    )

    if incident is None:
        raise HTTPException(
            status_code=404,
            detail="Incident not found",
        )

    return incident


@router.put("/{incident_id}/status")
def update_incident_status(
    incident_id: int,
    status: StatusUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(
        require_roles(
            ["Admin", "Analyst"]
        )
    ),
):

    try:

        incident = IncidentService.update_status(
            db,
            incident_id,
            status.status,
        )

        if incident is None:
            raise HTTPException(
                status_code=404,
                detail="Incident not found",
            )

        return {
            "message": "Incident status updated successfully",
            "incident": incident,
        }

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )