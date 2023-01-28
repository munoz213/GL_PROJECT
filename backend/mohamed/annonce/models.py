from flask import url_for
from annonce import db, app1
from datetime import datetime
import datetime
from user.models import User

class Ad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    annonceur_id = db.Column(db.Integer, db.ForeignKey(User.id) ,nullable=False)
    titre = db.Column(db.String(120), nullable=False)
    category = db.Column(db.String(120))
    theme = db.Column(db.String(120))
    mode = db.Column(db.String(120))
    description = db.Column(db.String(500))
    tarif = db.Column(db.String(120))
    wilaya = db.Column(db.String(120))
    commune = db.Column(db.String(120))
    address = db.Column(db.String(120))
    date_posted = db.Column( db.DateTime , default= datetime.datetime.now())
    photo = db.relationship('Photo', backref='ad', lazy=True)
    messages = db.relationship('Message', backref='ad', lazy=True)
    def to_dict(self):
        return {
            'id': self.id,
            'annonceur_id':self.annonceur_id,
            "titre":self.titre,
            'category' : self.category,
            'theme': self.theme,
            'mode':self.mode,
            'description': self.description,
            'tarif': self.tarif,
            'wilaya': self.wilaya,
            'commune':self.commune,
            'address':self.address,
            'photo': url_for('static', filename=f'photos/{self.photo}', _external=True)
        }
    
    

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ad_id = db.Column(db.Integer, db.ForeignKey('ad.id'), nullable = False,)
    filepath = db.Column(db.String(500))


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ad_id = db.Column(db.Integer, db.ForeignKey('ad.id'))
    sender_id = db.Column(db.Integer, db.ForeignKey(User.id))
    message = db.Column(db.String(500))
    offer = db.Column(db.Float)
    
class FavoriteAd(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    ad_id = db.Column(db.Integer, db.ForeignKey('ad.id'), nullable=False)



@app1.before_first_request
def create_tables():
     db.create_all()