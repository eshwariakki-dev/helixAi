from datetime import datetime


class NotificationEngine:

    @staticmethod
    def generate(incident, decision):

        notifications = []

        departments = decision.get(
            "notify_departments",
            []
        )

        priority = decision.get(
            "priority",
            "Low"
        )

        for department in departments:

            notifications.append(
                {
                    "incident_id": incident.id,
                    "department": department,
                    "priority": priority,
                    "title": incident.title,
                    "message": (
                        f"{priority} incident reported in "
                        f"{incident.sector}: {incident.title}"
                    ),
                    "timestamp": datetime.utcnow().isoformat()
                }
            )

        return notifications