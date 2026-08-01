from pydantic import BaseModel
from datetime import datetime


class UploadResponse(BaseModel):
    incident_id: int
    filename: str
    filepath: str
    uploaded_at: datetime