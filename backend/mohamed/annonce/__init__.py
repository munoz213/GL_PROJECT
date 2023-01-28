from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app1 = Flask(__name__)
app1.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app1.config['SECRET_KEY'] = 'thisisasecretkey'

db = SQLAlchemy(app1)

from annonce import routes

