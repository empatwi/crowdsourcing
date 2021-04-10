from ..db import db

class Tweet(db.Document):
    #created_at = db.(datetime) //TODO
    tweet_content = db.StringField(required=True, unique=True)
    user_location = db.StringField(required=False)
    keywords = db.ListField(db.StringField(), required=True)
    #classification = array de obj //TODO
    #entities = array de obj //TODO