from datetime import datetime
from pydantic import BaseModel


class IncidentCreate(BaseModel):
    title: str
    sector: str
    category: str
    severity: str
    location: str
    description: str


class IncidentResponse(BaseModel):
    id: int
    title: str
    sector: str
    category: str
    severity: str
    location: str
    description: str
    status: str
    created_at: datetime

    class Config:
        from_attributes = True