import os

import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()


class GeminiService:

    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")

        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in .env")

        genai.configure(api_key=api_key)

        self.model = genai.GenerativeModel("gemini-2.5-flash")

    def generate(self, prompt: str) -> str:
        response = self.model.generate_content(prompt)

        if response.text:
            return response.text

        return "No response generated."