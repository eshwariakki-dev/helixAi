from pydantic import BaseModel
from typing import List, Dict, Any


class DashboardSummaryResponse(BaseModel):
    total_incidents: int
    open_incidents: int
    critical_incidents: int
    healthcare_incidents: int
    manufacturing_incidents: int

    severity_distribution: List[Any]
    sector_distribution: List[Any]

    recent_incidents: List[Dict]