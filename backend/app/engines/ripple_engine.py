class RippleEngine:

    @staticmethod
    def analyze(incident):

        ripple_map = {
            "Manufacturing": [
                "Supply Chain",
                "Logistics",
                "Inventory",
                "Procurement"
            ],
            "Healthcare": [
                "Emergency Services",
                "Patient Care",
                "Pharmacy",
                "Laboratory"
            ],
            "Transportation": [
                "Traffic Management",
                "Public Transport",
                "Emergency Response"
            ],
            "Energy": [
                "Power Grid",
                "Telecommunications",
                "Water Supply"
            ]
        }

        affected = ripple_map.get(incident.sector, [])

        return {
            "affected_sectors": affected,
            "affected_count": len(affected),
            "cross_sector_impact": len(affected) > 0
        }