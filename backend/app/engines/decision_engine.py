class DecisionEngine:

    @staticmethod
    def analyze_incident(incident):

        severity_rules = {
            "Low": {
                "risk_score": 25,
                "priority": "Low",
                "business_impact": "Low",
                "operational_impact": "Low",
                "financial_impact": "Low",
                "recovery_time": "1-2 Days",
                "escalation_level": "Level 0",
                "notify_departments": ["Operations"],
                "ripple_trigger": False,
            },
            "Medium": {
                "risk_score": 50,
                "priority": "Medium",
                "business_impact": "Medium",
                "operational_impact": "Medium",
                "financial_impact": "Medium",
                "recovery_time": "12-24 Hours",
                "escalation_level": "Level 1",
                "notify_departments": [
                    "Operations",
                    "Maintenance"
                ],
                "ripple_trigger": True,
            },
            "High": {
                "risk_score": 75,
                "priority": "High",
                "business_impact": "High",
                "operational_impact": "High",
                "financial_impact": "High",
                "recovery_time": "4-12 Hours",
                "escalation_level": "Level 2",
                "notify_departments": [
                    "Operations",
                    "Maintenance",
                    "Safety"
                ],
                "ripple_trigger": True,
            },
            "Critical": {
                "risk_score": 100,
                "priority": "Critical",
                "business_impact": "Critical",
                "operational_impact": "Critical",
                "financial_impact": "Critical",
                "recovery_time": "Immediate",
                "escalation_level": "Level 3",
                "notify_departments": [
                    "Operations",
                    "Maintenance",
                    "Safety",
                    "Executive Team"
                ],
                "ripple_trigger": True,
            }
        }

        analysis = severity_rules.get(
            incident.severity,
            severity_rules["Low"]
        ).copy()

        analysis.update({
            "sector": incident.sector,
            "category": incident.category,
            "status": incident.status or "Open"
        })

        return analysis