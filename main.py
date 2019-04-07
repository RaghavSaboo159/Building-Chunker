import sqlalchemy
from sqlalchemy import create_engine
from flask import Flask, flash, redirect, render_template, request, session, url_for, jsonify

app = Flask(__name__)

db = create_engine("sqlite:///app.db")

@app.route("/", methods=["GET", "POST"])
def index():
	return render_template("index.html");

if __name__ == '__main__':
	app.run()