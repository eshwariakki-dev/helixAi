from app.engines.decision_engine import DecisionEngine
from app.engines.ripple_engine import RippleEngine
from app.engines.chaos_engine import ChaosEngine
from app.engines.knowledge_engine import KnowledgeEngine


class AnalysisOrchestrator:

    @staticmethod
    def analyze(incident):

        decision = DecisionEngine.analyze_incident(incident)

        ripple = RippleEngine.analyze(incident)

        chaos = ChaosEngine.simulate(
            incident,
            decision,
            ripple
        )

        knowledge = KnowledgeEngine.analyze(incident)

        return {
            "analysis": decision,
            "ripple": ripple,
            "chaos": chaos,
            "knowledge": knowledge
        }