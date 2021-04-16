from flask import Flask, request, Response
from database.db import initialize_db
from database.models.movie import Movie
from database.models.tweet import Tweet

app = Flask(__name__)

app.config['MONGODB_SETTINGS'] = {
    'host': 'mongodb://localhost/empatwi'
}

initialize_db(app)

@app.route('/')
def start():
    return 'Welcome to Empatwi'

@app.route('/tweets')
def get_tweets():
    tweets = Tweet.objects().to_json()
    return Response(tweets, mimetype="application/json", status=200)

@app.route('/movies', methods=['POST'])
def add_movie():
    body = request.get_json()
    print(f"======= BODY: {body} =======")
    movie = Movie(**body).save()
    _id = movie.id
    return {'id': str(_id)}, 200

@app.route('/movies/<id>', methods=['PUT'])
def update_movie(id):
    body = request.get_json()
    Movie.objects.get(id=id).update(**body)
    return '', 200

@app.route('/movies/<id>', methods=['DELETE'])
def delete_movie(id):
    Movie.objects.get(id=id).delete()
    return '', 200

@app.route('/movies/<id>')
def get_movie(id):
    movies = Movie.objects.get(id=id).to_json()
    return Response(movies, mimetype="application/json", status=200)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)