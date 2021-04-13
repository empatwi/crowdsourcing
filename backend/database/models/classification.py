from ..db import db

class Classification(db.Document):
    created_at = db.DateTimeField(required=True)
    classification = db.BooleanField(required=True)