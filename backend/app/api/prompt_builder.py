from app.schemas.incident import IncidentResponse
from app.schemas.decision import (
    DecisionAnalysisResponse,
    RippleAnalysisResponse,
    ChaosAnalysisResponse,
    KnowledgeAnalysisResponse
)


def build_prompt(
    incident: IncidentResponse,
    decision: DecisionAnalysisResponse,
    ripple: RippleAnalysisResponse,
    chaos: ChaosAnalysisResponse,
    knowledge: KnowledgeAnalysisResponse,
) -> str:

    prompt = f"""
You are HELIX AI.

HELIX AI is an Executive Decision Intelligence Platform specialized ONLY in:

1. Manufacturing
2. Healthcare

Your task is to analyze the complete incident and produce executive recommendations.

Return ONLY valid JSON.

==========================
INCIDENT
==========================

Title:
{incident.title}

Sector:
{incident.sector}

Category:
{incident.category}

Severity:
{incident.severity}

Location:
{incident.location}

Description:
{incident.description}

==========================
DECISION ENGINE
==========================

Risk Score:
{decision.risk_score}

Priority:
{decision.priority}

Recommended Department:
{decision.recommended_department}

Estimated Response Time:
{decision.estimated_response_time}

==========================
RIPPLE ENGINE
==========================

Operational Impact:
{ripple.operational_impact}

Financial Impact:
{ripple.financial_impact}

Safety Impact:
{ripple.safety_impact}

Customer Impact:
{ripple.customer_impact}

Overall Ripple Score:
{ripple.overall_ripple_score}

==========================
CHAOS ENGINE
==========================

Worst Case Scenario:
{chaos.worst_case}

Probability:
{chaos.probability}

Expected Downtime:
{chaos.expected_downtime}

Estimated Loss:
{chaos.estimated_loss}

==========================
KNOWLEDGE ENGINE
==========================

Similar Incident:
{knowledge.similar_incident}

Resolution:
{knowledge.recommended_resolution}

Confidence:
{knowledge.confidence}

==========================
INSTRUCTIONS
==========================

Return ONLY valid JSON in this exact structure:

{{
  "executive_summary": "...",
  "overall_risk": "...",
  "critical_findings": [
    "...",
    "..."
  ],
  "immediate_actions": [
    "...",
    "..."
  ],
  "resource_allocation": [
    "...",
    "..."
  ],
  "communication_plan": [
    "...",
    "..."
  ],
  "recovery_strategy": "...",
  "executive_recommendation": "..."
}}

Do not return markdown.

Do not return explanations.

Return JSON only.
"""

    return prompt