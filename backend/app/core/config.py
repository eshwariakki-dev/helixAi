from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "HELIX AI"
    APP_VERSION: str = "1.0.0"

    HOST: str = "127.0.0.1"
    PORT: int = 8000

    SECRET_KEY: str = "change_this_to_a_secure_secret_key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    DATABASE_URL: str = "sqlite:///./helix.db"

    GEMINI_API_KEY: str = ""

    DEBUG: bool = True

    class Config:
        env_file = ".env"


settings = Settings()