from datetime import datetime

from sqlalchemy import (
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
)

from app.database.database import Base


class IncidentTimeline(Base):
    __tablename__ = "incident_timeline"

    id = Column(Integer, primary_key=True, index=True)

    incident_id = Column(
        Integer,
        ForeignKey("incidents.id"),
        nullable=False,
    )

    action = Column(
        String(100),
        nullable=False,
    )

    performed_by = Column(
        String(100),
        default="System",
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )