from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.incident import Incident


class DashboardService:

    @staticmethod
    def get_dashboard_summary(db: Session):

        total = db.query(Incident).count()

        # Status Counts
        open_incidents = (
            db.query(Incident)
            .filter(Incident.status == "Open")
            .count()
        )

        assigned_incidents = (
            db.query(Incident)
            .filter(Incident.status == "Assigned")
            .count()
        )

        investigating_incidents = (
            db.query(Incident)
            .filter(Incident.status == "Investigating")
            .count()
        )

        resolved_incidents = (
            db.query(Incident)
            .filter(Incident.status == "Resolved")
            .count()
        )

        closed_incidents = (
            db.query(Incident)
            .filter(Incident.status == "Closed")
            .count()
        )

        # Severity Counts
        critical = (
            db.query(Incident)
            .filter(Incident.severity == "Critical")
            .count()
        )

        high = (
            db.query(Incident)
            .filter(Incident.severity == "High")
            .count()
        )

        medium = (
            db.query(Incident)
            .filter(Incident.severity == "Medium")
            .count()
        )

        low = (
            db.query(Incident)
            .filter(Incident.severity == "Low")
            .count()
        )

        # Sector Counts
        healthcare = (
            db.query(Incident)
            .filter(Incident.sector == "Healthcare")
            .count()
        )

        manufacturing = (
            db.query(Incident)
            .filter(Incident.sector == "Manufacturing")
            .count()
        )

        # Severity Distribution
        severity_distribution = [
            {
                "severity": severity,
                "count": count
            }
            for severity, count in (
                db.query(
                    Incident.severity,
                    func.count(Incident.id)
                )
                .group_by(Incident.severity)
                .all()
            )
        ]

        # Sector Distribution
        sector_distribution = [
            {
                "sector": sector,
                "count": count
            }
            for sector, count in (
                db.query(
                    Incident.sector,
                    func.count(Incident.id)
                )
                .group_by(Incident.sector)
                .all()
            )
        ]

        # Status Distribution
        status_distribution = [
            {
                "status": status,
                "count": count
            }
            for status, count in (
                db.query(
                    Incident.status,
                    func.count(Incident.id)
                )
                .group_by(Incident.status)
                .all()
            )
        ]

        # Recent Incidents
        recent_incidents = [
            {
                "id": incident.id,
                "title": incident.title,
                "sector": incident.sector,
                "category": incident.category,
                "severity": incident.severity,
                "status": incident.status,
                "location": incident.location,
                "created_at": incident.created_at.isoformat()
                if incident.created_at else None,
            }
            for incident in (
                db.query(Incident)
                .order_by(Incident.created_at.desc())
                .limit(10)
                .all()
            )
        ]

        return {
            "summary": {
                "total_incidents": total,
                "open_incidents": open_incidents,
                "assigned_incidents": assigned_incidents,
                "investigating_incidents": investigating_incidents,
                "resolved_incidents": resolved_incidents,
                "closed_incidents": closed_incidents,
                "critical_incidents": critical,
                "high_incidents": high,
                "medium_incidents": medium,
                "low_incidents": low,
                "healthcare_incidents": healthcare,
                "manufacturing_incidents": manufacturing
            },
            "charts": {
                "severity_distribution": severity_distribution,
                "sector_distribution": sector_distribution,
                "status_distribution": status_distribution
            },
            "recent_incidents": recent_incidents
        }