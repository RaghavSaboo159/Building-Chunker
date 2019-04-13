import sqlalchemy, sys
from sqlalchemy import create_engine
from flask import Flask, flash, redirect, render_template, request, session, url_for, jsonify

app = Flask(__name__)

# database for the forum posts, the experiment it is used for 
db = create_engine("sqlite:///forum.db")

# Standard Routes for all web pages, the function names are used in the html for all anchor links

@app.route("/", methods=["GET", "POST"])
def index():
	return render_template("index.html");

@app.route("/Experiment", methods=["GET", "POST"])
def experiments():
	return render_template("experiments.html");

@app.route("/Contribute", methods=["GET", "POST"])
def contribute():
	return render_template("contribute.html");

@app.route("/Building-Chunker", methods=["GET", "POST"])
def buildingchunker():
	return render_template("Experiments/Building-Chunker/index.html")

@app.route("/New", methods=["GET"])
def new():
	posts = db.engine.execute("SELECT * FROM POSTS")

	return render_template("new.html", posts = posts)

@app.route("/New", methods=["POST"])
def createpost():
	new = request.get_json()
	db.engine.execute("INSERT INTO POSTS VALUES(:name, :topic, :content)", name=new["name"], topic=new["topic"], content=new["content"])
	print(request.get_json(), file=sys.stderr)
	return request.data

if __name__ == '__main__':
	app.run()