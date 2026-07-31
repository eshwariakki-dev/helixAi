from pydantic import BaseModel
from typing import List, Dict


class DecisionAnalysisResponse(BaseModel):
    risk_score: int
    priority: str
    business_impact: str
    operational_impact: str
    financial_impact: str
    recovery_time: str
    escalation_level: str
    notify_departments: List[str]
    ripple_trigger: bool
    sector: str
    category: str
    status: str


class RippleAnalysisResponse(BaseModel):
    affected_sectors: List[str]
    affected_count: int
    cross_sector_impact: bool


class ChaosScenario(BaseModel):
    scenario: str
    probability: int
    downtime: str
    financial_loss: str
    business_impact: str


class ChaosAnalysisResponse(BaseModel):
    scenario_count: int
    cross_sector_impact: bool
    scenarios: List[ChaosScenario]


class KnowledgeAnalysisResponse(BaseModel):
    sop: List[str]
    regulations: List[str]
    recommended_teams: List[str]

class NotificationResponse(BaseModel):
    incident_id: int
    department: str
    priority: str
    title: str
    message: str
    timestamp: str

class ExecutiveReportResponse(BaseModel):
    executive_summary: str = ""
    root_cause_analysis: str = ""
    business_impact: str = ""
    operational_impact: str = ""
    risk_assessment: str = ""
    immediate_actions: str = ""
    short_term_actions: str = ""
    long_term_prevention: str = ""
    resource_requirements: str = ""
    estimated_recovery_time: str = ""
    executive_recommendation: str = ""


class IncidentAnalysisResponse(BaseModel):
    incident: Dict
    analysis: DecisionAnalysisResponse
    ripple: RippleAnalysisResponse
    chaos: ChaosAnalysisResponse
    knowledge: KnowledgeAnalysisResponse
    notifications: List[NotificationResponse]
    executive_report: ExecutiveReportResponse