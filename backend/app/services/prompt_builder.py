from typing import Dict


class PromptBuilder:

    @staticmethod
    def build_prompt(
        incident: Dict,
        decision: Dict,
        ripple: Dict,
        chaos: Dict,
        knowledge: Dict,
    ) -> str:

        sector = incident.get("sector", "")
        title = incident.get("title", "")
        category = incident.get("category", "")
        severity = incident.get("severity", "")
        location = incident.get("location", "")
        description = incident.get("description", "")

        prompt = f"""
You are HELIX AI.

You are an enterprise decision intelligence system.

Supported sectors:
1. Manufacturing
2. Healthcare

Analyze the following incident.

INCIDENT

Sector:
{sector}

Title:
{title}

Category:
{category}

Severity:
{severity}

Location:
{location}

Description:
{description}

Decision Engine Output

{decision}

Ripple Engine Output

{ripple}

Chaos Engine Output

{chaos}

Knowledge Engine Output

{knowledge}

Generate a structured executive report with the following sections.

1. Executive Summary

2. Root Cause Analysis

3. Business Impact

4. Operational Impact

5. Risk Assessment

6. Immediate Actions

7. Short-Term Actions

8. Long-Term Prevention

9. Resource Requirements

10. Estimated Recovery Time

11. Executive Recommendation

Respond only in plain text.
"""

        return prompt