from app.engines.decision_engine import DecisionEngine
from app.engines.ripple_engine import RippleEngine
from app.engines.chaos_engine import ChaosEngine
from app.engines.knowledge_engine import KnowledgeEngine

from app.notifications.notification_engine import NotificationEngine

from app.services.prompt_builder import PromptBuilder
from app.services.gemini_service import GeminiService
from app.services.response_parser import ResponseParser


class IncidentOrchestrator:

    @staticmethod
    def process(incident):

        # Decision Engine
        decision = DecisionEngine.analyze_incident(
            incident
        )

        # Ripple Engine
        ripple = RippleEngine.analyze(
            incident
        )

        # Chaos Engine
        chaos = ChaosEngine.simulate(
            incident,
            decision,
            ripple
        )

        # Knowledge Engine
        knowledge = KnowledgeEngine.analyze(
            incident
        )

        # Notification Engine
        notifications = NotificationEngine.generate(
            incident,
            decision
        )

        # Build Prompt
        prompt = PromptBuilder.build_prompt(
            incident={
                "title": incident.title,
                "sector": incident.sector,
                "category": incident.category,
                "severity": incident.severity,
                "location": incident.location,
                "description": incident.description,
            },
            decision=decision,
            ripple=ripple,
            chaos=chaos,
            knowledge=knowledge,
        )

        # Gemini AI
        gemini = GeminiService()

        ai_text = gemini.generate(
            prompt
        )

        # Parse AI Response
        executive_report = ResponseParser.parse(
            ai_text
        )

        return {
            "analysis": decision,
            "ripple": ripple,
            "chaos": chaos,
            "knowledge": knowledge,
            "notifications": notifications,
            "executive_report": executive_report,
        }