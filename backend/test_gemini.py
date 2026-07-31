from app.services.gemini_service import GeminiService

service = GeminiService()

response = service.generate("Explain why conveyor belt failure is dangerous in manufacturing.")

print(response)