from sqlalchemy.orm import Session

from app.models.incident_timeline import IncidentTimeline


class TimelineService:

    @staticmethod
    def add_event(
        db: Session,
        incident_id: int,
        action: str,
        performed_by: str = "System",
    ):

        event = IncidentTimeline(
            incident_id=incident_id,
            action=action,
            performed_by=performed_by,
        )

        db.add(event)
        db.commit()
        db.refresh(event)

        return event

    @staticmethod
    def get_timeline(
        db: Session,
        incident_id: int,
    ):

        return (
            db.query(IncidentTimeline)
            .filter(
                IncidentTimeline.incident_id == incident_id
            )
            .order_by(
                IncidentTimeline.created_at.asc()
            )
            .all()
        )