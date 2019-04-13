import sqlalchemy
from sqlalchemy import create_engine
from flask import Flask, flash, redirect, render_template, request, session, url_for, jsonify

app = Flask(__name__)

# database for the forum posts, the experiment it is used for 
db = create_engine("sqlite:///app.db")

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

if __name__ == '__main__':
	app.run()