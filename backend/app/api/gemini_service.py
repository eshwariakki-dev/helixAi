import os

import google.generativeai as genai

from app.ai.prompt_builder import build_prompt
from app.schemas.incident import IncidentResponse
from app.schemas.decision import (
    DecisionAnalysisResponse,
    RippleAnalysisResponse,
    ChaosAnalysisResponse,
    KnowledgeAnalysisResponse,
)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


class GeminiService:

    @staticmethod
    def generate_report(
        incident: IncidentResponse,
        decision: DecisionAnalysisResponse,
        ripple: RippleAnalysisResponse,
        chaos: ChaosAnalysisResponse,
        knowledge: KnowledgeAnalysisResponse,
    ):

        prompt = build_prompt(
            incident,
            decision,
            ripple,
            chaos,
            knowledge,
        )

        response = model.generate_content(prompt)

        return response.text