from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_oauthlib.client import OAuth
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' #database
app.config['SECRET_KEY'] = 'thisisasecretkey' 
app.config['GOOGLE_ID'] = "759759818799-usn41adolocup2d3j5phnucknqipt76s.apps.googleusercontent.com" #google authentification
app.config['GOOGLE_SECRET'] = "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" 
oauth = OAuth(app) 

db = SQLAlchemy(app)


from user import routes
