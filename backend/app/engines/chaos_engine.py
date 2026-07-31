class ChaosEngine:

    @staticmethod
    def simulate(incident, decision_analysis, ripple_analysis):

        severity = incident.severity

        scenarios = []

        if severity == "Low":
            scenarios = [
                {
                    "scenario": "Immediate Resolution",
                    "probability": 95,
                    "downtime": "Less than 1 Hour",
                    "financial_loss": "$1,000",
                    "business_impact": "Minimal"
                }
            ]

        elif severity == "Medium":
            scenarios = [
                {
                    "scenario": "Minor Service Disruption",
                    "probability": 80,
                    "downtime": "4 Hours",
                    "financial_loss": "$10,000",
                    "business_impact": "Moderate"
                },
                {
                    "scenario": "Escalation Due to Delay",
                    "probability": 35,
                    "downtime": "12 Hours",
                    "financial_loss": "$30,000",
                    "business_impact": "High"
                }
            ]

        elif severity == "High":
            scenarios = [
                {
                    "scenario": "Rapid Recovery",
                    "probability": 70,
                    "downtime": "6 Hours",
                    "financial_loss": "$50,000",
                    "business_impact": "High"
                },
                {
                    "scenario": "Supply Chain Failure",
                    "probability": 45,
                    "downtime": "24 Hours",
                    "financial_loss": "$250,000",
                    "business_impact": "Critical"
                },
                {
                    "scenario": "Cross Sector Disruption",
                    "probability": 25,
                    "downtime": "2 Days",
                    "financial_loss": "$500,000",
                    "business_impact": "Severe"
                }
            ]

        else:  # Critical
            scenarios = [
                {
                    "scenario": "Controlled Shutdown",
                    "probability": 60,
                    "downtime": "12 Hours",
                    "financial_loss": "$500,000",
                    "business_impact": "Critical"
                },
                {
                    "scenario": "Infrastructure Failure",
                    "probability": 40,
                    "downtime": "3 Days",
                    "financial_loss": "$2 Million",
                    "business_impact": "Extreme"
                },
                {
                    "scenario": "National Service Disruption",
                    "probability": 15,
                    "downtime": "1 Week",
                    "financial_loss": "$10 Million",
                    "business_impact": "Catastrophic"
                }
            ]

        return {
            "scenario_count": len(scenarios),
            "cross_sector_impact": ripple_analysis["cross_sector_impact"],
            "scenarios": scenarios
        }