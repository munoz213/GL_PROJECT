from user import db, app
from flask_login import UserMixin
from flask_marshmallow import Marshmallow




class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True, nullable=False)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(20), nullable = False, unique =True)
    password = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(10), nullable=False, unique=True)


ma = Marshmallow(app)

class userschema(ma.Schema):
    class Meta:
        fields = ("id","name","email","password", "phone")

user_schema = userschema()
users_schema = userschema(many =True)        
    
@app.before_first_request
def create_tables():
     db.create_all()
     
     