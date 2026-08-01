from datetime import datetime
from sqlalchemy.orm import Session

from app.models.incident import Incident

from app.schemas.incident import (
    IncidentCreate,
    IncidentResponse,
)

from app.orchestrators.incident_orchestrator import IncidentOrchestrator
from app.services.ai_report_service import AIReportService
from app.services.timeline_service import TimelineService


class IncidentService:

    @staticmethod
    def create_incident(
        db: Session,
        incident: IncidentCreate,
    ):

        # Save Incident
        db_incident = Incident(
            title=incident.title,
            sector=incident.sector,
            category=incident.category,
            severity=incident.severity,
            location=incident.location,
            description=incident.description,
            status="Open",
        )

        db.add(db_incident)
        db.commit()
        db.refresh(db_incident)

        # Timeline Event
        TimelineService.add_event(
            db=db,
            incident_id=db_incident.id,
            action="Incident Created",
        )

        # Convert SQLAlchemy Model to Pydantic Model
        incident_response = IncidentResponse.model_validate(
            db_incident
        )

        # Execute Complete AI Pipeline
        ai_result = IncidentOrchestrator.process(
            incident_response
        )

        # Save AI Report
        executive_report = ai_result.get(
            "executive_report"
        )

        if executive_report:
            AIReportService.save_report(
                db=db,
                incident_id=db_incident.id,
                report=executive_report,
            )

        # Return Response
        return {
            "incident": incident_response.model_dump(),
            **ai_result
        }

    @staticmethod
    def get_all_incidents(
        db: Session,
        sector: str | None = None,
        severity: str | None = None,
        status: str | None = None,
    ):

        query = db.query(Incident)

        if sector:
            query = query.filter(
                Incident.sector == sector
            )

        if severity:
            query = query.filter(
                Incident.severity == severity
            )

        if status:
            query = query.filter(
                Incident.status == status
            )

        return (
            query
            .order_by(Incident.created_at.desc())
            .all()
        )

    @staticmethod
    def get_incident(
        db: Session,
        incident_id: int,
    ):
        return (
            db.query(Incident)
            .filter(
                Incident.id == incident_id
            )
            .first()
        )

    @staticmethod
    def update_status(
        db: Session,
        incident_id: int,
        new_status: str,
    ):

        incident = (
            db.query(Incident)
            .filter(
                Incident.id == incident_id
            )
            .first()
        )

        if not incident:
            return None

        workflow = {
            "Open": ["Assigned"],
            "Assigned": ["Investigating"],
            "Investigating": ["Resolved"],
            "Resolved": ["Closed"],
            "Closed": []
        }

        current_status = incident.status

        if new_status not in workflow.get(
            current_status,
            []
        ):
            raise ValueError(
                f"Invalid status transition from {current_status} to {new_status}"
            )

        incident.status = new_status

        if new_status == "Assigned":
            incident.assigned_at = datetime.utcnow()

        elif new_status == "Resolved":
            incident.resolved_at = datetime.utcnow()

        elif new_status == "Closed":
            incident.closed_at = datetime.utcnow()

        db.commit()
        db.refresh(incident)

        # Timeline Event
        TimelineService.add_event(
            db=db,
            incident_id=incident.id,
            action=f"Status changed to {new_status}",
        )

        return incident