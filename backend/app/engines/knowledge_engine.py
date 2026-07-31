class KnowledgeEngine:

    KNOWLEDGE_BASE = {
        "Manufacturing": {
            "sop": [
                "Stop the affected machinery immediately.",
                "Isolate the equipment from the production line.",
                "Notify the maintenance supervisor.",
                "Inspect nearby machines for related issues."
            ],
            "regulations": [
                "Follow workplace safety procedures.",
                "Record equipment failure in maintenance logs."
            ],
            "recommended_teams": [
                "Maintenance",
                "Operations",
                "Safety"
            ]
        },

        "Healthcare": {
            "sop": [
                "Prioritize patient safety.",
                "Activate emergency response procedures.",
                "Inform hospital administration."
            ],
            "regulations": [
                "Follow hospital emergency protocols.",
                "Maintain patient confidentiality."
            ],
            "recommended_teams": [
                "Emergency",
                "Clinical Staff",
                "Administration"
            ]
        },

        "Transportation": {
            "sop": [
                "Secure the affected route.",
                "Notify traffic control.",
                "Dispatch emergency response teams."
            ],
            "regulations": [
                "Follow transportation safety regulations."
            ],
            "recommended_teams": [
                "Traffic Control",
                "Emergency Response"
            ]
        },

        "Energy": {
            "sop": [
                "Isolate the affected grid section.",
                "Activate backup systems.",
                "Notify the control center."
            ],
            "regulations": [
                "Follow electrical safety standards."
            ],
            "recommended_teams": [
                "Grid Operations",
                "Maintenance",
                "Safety"
            ]
        }
    }

    @staticmethod
    def analyze(incident):

        return KnowledgeEngine.KNOWLEDGE_BASE.get(
            incident.sector,
            {
                "sop": [],
                "regulations": [],
                "recommended_teams": []
            }
        )