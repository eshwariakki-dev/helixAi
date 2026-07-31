from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.sql import func

from app.database.database import Base


class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)

    incident_id = Column(Integer, nullable=False)

    department = Column(String, nullable=False)

    priority = Column(String, nullable=False)

    title = Column(String, nullable=False)

    message = Column(String, nullable=False)

    is_read = Column(Boolean, default=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )