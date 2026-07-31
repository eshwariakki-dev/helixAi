from datetime import datetime

from sqlalchemy import (
    Column,
    DateTime,
    ForeignKey,
    Integer,
    Text,
)

from app.database.database import Base


class AIReport(Base):
    __tablename__ = "ai_reports"

    id = Column(Integer, primary_key=True, index=True)

    incident_id = Column(
        Integer,
        ForeignKey("incidents.id"),
        nullable=False,
        unique=True
    )

    executive_summary = Column(Text)

    root_cause_analysis = Column(Text)

    business_impact = Column(Text)

    operational_impact = Column(Text)

    risk_assessment = Column(Text)

    immediate_actions = Column(Text)

    short_term_actions = Column(Text)

    long_term_prevention = Column(Text)

    resource_requirements = Column(Text)

    estimated_recovery_time = Column(Text)

    executive_recommendation = Column(Text)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )