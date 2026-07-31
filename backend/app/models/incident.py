from datetime import datetime

from sqlalchemy import (
    Column,
    DateTime,
    Integer,
    String,
    Text,
)

from app.database.database import Base


class Incident(Base):
    __tablename__ = "incidents"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(150), nullable=False)

    sector = Column(String(50), nullable=False)

    category = Column(String(100), nullable=False)

    severity = Column(String(20), nullable=False)

    location = Column(String(150), nullable=False)

    description = Column(Text, nullable=False)

    status = Column(
        String(30),
        default="Open",
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    assigned_at = Column(
        DateTime,
        nullable=True
    )

    resolved_at = Column(
        DateTime,
        nullable=True
    )

    closed_at = Column(
        DateTime,
        nullable=True
    )