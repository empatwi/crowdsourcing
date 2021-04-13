from ..db import db

class Entities(db.Document):
    entities = db.ListField(db.StringField())