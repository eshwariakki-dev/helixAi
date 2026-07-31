from app.database.database import Base, engine
import app.database.base


def init_db():
    Base.metadata.create_all(bind=engine)