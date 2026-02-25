from sqlalchemy import Column, String, Text, DateTime
from datetime import datetime

from app.database import Base


class ContactFormSubmission(Base):
        __tablename__ = 'contact_form_submissions'

        id = Column('id', primary_key=True, index=True)
        name = Column(String(255), nullable=False)
        email = Column(String(255), nullable=False)
        message = Column(Text, nullable=False)
        subject = Column(String(255), default="")
        created_at = Column(DateTime, default=datetime.utcnow)