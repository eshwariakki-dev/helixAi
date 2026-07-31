from pydantic import BaseModel
from datetime import datetime


class AIReportCreate(BaseModel):
    incident_id: int

    executive_summary: str
    root_cause_analysis: str
    business_impact: str
    operational_impact: str
    risk_assessment: str
    immediate_actions: str
    short_term_actions: str
    long_term_prevention: str
    resource_requirements: str
    estimated_recovery_time: str
    executive_recommendation: str


class AIReportResponse(AIReportCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True