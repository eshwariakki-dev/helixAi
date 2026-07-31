from sqlalchemy.orm import Session

from app.models.ai_report import AIReport


class AIReportService:

    @staticmethod
    def save_report(
        db: Session,
        incident_id: int,
        report: dict,
    ):

        ai_report = AIReport(
            incident_id=incident_id,
            executive_summary=report.get("executive_summary", ""),
            root_cause_analysis=report.get("root_cause_analysis", ""),
            business_impact=report.get("business_impact", ""),
            operational_impact=report.get("operational_impact", ""),
            risk_assessment=report.get("risk_assessment", ""),
            immediate_actions=report.get("immediate_actions", ""),
            short_term_actions=report.get("short_term_actions", ""),
            long_term_prevention=report.get("long_term_prevention", ""),
            resource_requirements=report.get("resource_requirements", ""),
            estimated_recovery_time=report.get("estimated_recovery_time", ""),
            executive_recommendation=report.get(
                "executive_recommendation",
                ""
            ),
        )

        db.add(ai_report)
        db.commit()
        db.refresh(ai_report)

        return ai_report

    @staticmethod
    def get_report_by_incident(
        db: Session,
        incident_id: int,
    ):

        return (
            db.query(AIReport)
            .filter(
                AIReport.incident_id == incident_id
            )
            .first()
        )