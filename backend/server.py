from flask import Flask
from flask_mongoengine import MongoEngine

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'db': 'empatwi_db',
    'host': 'localhost',
    'port': '27017'
}

db = MongoEngine()
db.init_app(app)

@app.route("/")
def home_page():
    return "Home page"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)