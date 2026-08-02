from pydantic import BaseModel, EmailStr


class UserSettingsUpdate(BaseModel):
    name: str
    email: EmailStr