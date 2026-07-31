class ResponseParser:

    @staticmethod
    def parse(text: str) -> dict:
        """
        Converts Gemini's response into structured sections.
        """

        sections = {
            "executive_summary": "",
            "root_cause_analysis": "",
            "business_impact": "",
            "operational_impact": "",
            "risk_assessment": "",
            "immediate_actions": "",
            "short_term_actions": "",
            "long_term_prevention": "",
            "resource_requirements": "",
            "estimated_recovery_time": "",
            "executive_recommendation": ""
        }

        current_section = None

        mapping = {
            "Executive Summary": "executive_summary",
            "Root Cause Analysis": "root_cause_analysis",
            "Business Impact": "business_impact",
            "Operational Impact": "operational_impact",
            "Risk Assessment": "risk_assessment",
            "Immediate Actions": "immediate_actions",
            "Short-Term Actions": "short_term_actions",
            "Long-Term Prevention": "long_term_prevention",
            "Resource Requirements": "resource_requirements",
            "Estimated Recovery Time": "estimated_recovery_time",
            "Executive Recommendation": "executive_recommendation"
        }

        for line in text.splitlines():

            line = line.strip()

            if not line:
                continue

            found = False

            for heading, key in mapping.items():
                if heading.lower() in line.lower():
                    current_section = key
                    found = True
                    break

            if found:
                continue

            if current_section:
                sections[current_section] += line + "\n"

        for key in sections:
            sections[key] = sections[key].strip()

        return sections