from user import app, db, oauth
from flask import request, jsonify, url_for, session
from flask_bcrypt import Bcrypt
from flask_login import login_user, LoginManager, login_required, logout_user
from user.form import LoginForm, RegisterForm
from user.models import User, users_schema, user_schema, Ad,Photo,Message, FavoriteAd
import os


bcrypt = Bcrypt(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def home():
    return 'Welcome to the Home page'

@app.route('/login', methods=['POST']) #authenrification et verification des mots de passe 
def login():
    form = LoginForm()
    if form.validate():
        user = User.query.filter_by(email=form.email.data).first()
        if user:
            if bcrypt.check_password_hash(user.password, form.password.data):
                login_user(user)
                return jsonify({'message': 'Successfully logged in'})
        return jsonify({'error': 'Invalid email or password'}), 401
    return jsonify({'error': 'Invalid request'}), 400

@app.route('/dashboard', methods=['GET'])
@login_required
def dashboard():
    return jsonify({'message': 'Welcome to the dashboard'})

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Successfully logged out'})

@app.route('/register', methods=['POST'])
def register():
    form = RegisterForm() 
    if form.validate():
        hashed_password = bcrypt.generate_password_hash(form.password.data)
        new_user = User(name=form.name.data,email=form.email.data, password=hashed_password, phone=form.phone.data, address=form.address.data)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Successfully registered'})
    return jsonify({'error': 'Invalid request'}), 400

@app.route('/getallusers', methods=['GET'])
def getuser():
    users = User.query.order_by(User.id.desc(),User.date).all()
    return jsonify(users_schema.dump(users))


@app.route('/logingoogle')
def logingoogle():
    with app.app_context():
        google = oauth.remote_app(
            'google',
            consumer_key=app.config.get('GOOGLE_ID'),
            consumer_secret=app.config.get('GOOGLE_SECRET'),
            request_token_params={
                'scope': 'email'
            },
            base_url='https://www.googleapis.com/oauth2/v1/',
            request_token_url=None,
            access_token_method='POST',
            access_token_url='https://accounts.google.com/o/oauth2/token',
            authorize_url='https://accounts.google.com/o/oauth2/auth',
        )
        return google.authorize(callback=url_for('authorized', _external=True))

@app.route('/authorized')
def authorized():
    with app.app_context():
        google = oauth.remote_app(
            'google',
            consumer_key=app.config.get('GOOGLE_ID'),
            consumer_secret=app.config.get('GOOGLE_SECRET'),
            request_token_params={
                'scope': 'email'
            },
            base_url='https://www.googleapis.com/oauth2/v1/',
            request_token_url=None,
            access_token_method='POST',
            access_token_url='https://accounts.google.com/o/oauth2/token',
            authorize_url='https://accounts.google.com/o/oauth2/auth',
        )
        resp = google.authorized_response()
        if resp is None:
            return 'Access denied: reason=%s error=%s' % (
                request.args['error_reason'],
                request.args['error_description']
            )
        session['google_token'] = (resp['access_token'], '')
        me = google.get('userinfo')
        return jsonify(**me.data)


@app.route('/user/<id>', methods=['PUT'])# a utiliser dans le profil 
def update_user(id):
    name = request.form['name']
    password = request.form['password']
    phone = request.form['phone']
    address = request.form['address']
    user = User.query.filter_by(id=id).first()
    user.name = name
    user.password = password
    user.phone = phone
    user.address = address
    db.session.commit()
    return user_schema.jsonify(user)









@app.route('/post_ad', methods=['GET', 'POST'])
def post_ad():
    if request.method == 'POST':

        ad = Ad(annonceur_id= request.form['annonceur_id'],
                        titre = request.form['titre'],
                        category= request.form['category'],
                        theme= request.form['theme'],
                        mode= request.form['mode'],
                        description= request.form['description'],
                        tarif= request.form['tarif'],
                        wilaya=request.form['wilaya'],
                        commune=request.form['commune'],
                        address=request.form['address'])
        db.session.add(ad)
        db.session.commit()

        if not os.path.exists("photos"):
            os.mkdir("photos")
        for file in request.files.getlist('photos'):
            filename = file.filename
            filepath = 'photos/' + filename
            file.save(filepath)
            photo = Photo(ad_id=ad.id, filepath=filepath)
            db.session.add(photo)
        db.session.commit()
        
        return jsonify({'message': 'Ad posted successfully'}), 200
    return jsonify({'message': 'Invalid request method'}), 400


@app.route('/ads')
def get_ads():
    ads = Ad.query.order_by(Ad.date_posted.desc(),Ad.id.desc()).all()
    return jsonify([ad.to_dict() for ad in ads])

@app.route('/search_ad', methods=['GET'])
def search_ad():
    search_query = request.args.get('q')
    ads = Ad.query.filter(Ad.titre.like('%' + search_query + '%') | Ad.description.like('%' + search_query + '%')).all()
    return jsonify([ad.to_dict() for ad in ads]), 200


@app.route('/filter_ads', methods=['GET'])
def search_ads():
    category = request.args.get('category')
    theme = request.args.get('theme')
    wilaya = request.args.get('wilaya')
    commune = request.args.get('commune')
    date_debut = request.args.get('date_debut')
    date_fin = request.args.get('date_fin')

    query = Ad.query
    if category:
        query = query.filter(Ad.category == category)
    if theme:
        query = query.filter(Ad.theme == theme)
    if wilaya:
        query = query.filter(Ad.wilaya == wilaya)
    if commune:
        query = query.filter(Ad.commune == commune)
    if date_debut and date_fin:
        query = query.filter(Ad.date_posted.between(date_debut, date_fin))

    Ads = query.order_by(Ad.date_posted.desc()).all()
    return jsonify([Ad.to_dict() for Ad in Ads])


@app.route('/annonce/<int:id>')
def annonce(id):
    ann = Ad.query.get(id)
    data = {
        'id': ann.id,
        'titre': ann.titre,
        'category': ann.category,
        'theme': ann.theme,
        "mode":ann.mode,
        "description": ann.description,
        "tarif": ann.tarif,
        "wilaya": ann.wilaya,
        "commune": ann.commune,
        "address": ann.address,
        'photo': [p.filepath  for p in ann.photo]
    }
    return jsonify(data)


@app.route('/annonce/<int:id>/message', methods=['POST'])
def send_message(id):
    sender_id = request.form.get('sender_id')
    message = request.form.get('message')
    offer = request.form.get('offer')

    new_message = Message(ad_id=id, sender_id=sender_id, message=message, offer=offer)
    db.session.add(new_message)
    db.session.commit()

    return jsonify({'status': 'success'})


@app.route('/message/<int:ad_id>', methods=['GET'])
def get_messages(ad_id):
    messages = Message.query.filter_by(ad_id=ad_id).all()
    return jsonify([{'sender_name': message.sender_name, 'message': message.message, 'offer': message.offer} for message in messages])


@app.route('/annonces', methods=['GET'])
def get_annonces():
    user_id = request.args.get('user_id')
    if user_id is None:
        return jsonify({'error': 'user_id est requis'}), 400
    annonces = Ad.query.filter_by(annonceur_id=user_id).all()
    return jsonify([a.to_dict() for a in annonces])

@app.route('/save_favorite_ad', methods=['POST'])
def save_favorite_ad():
    user_id = request.form['user_id']
    ad_id = request.form['ad_id']
    new_favorite_ad = FavoriteAd(user_id=user_id, ad_id=ad_id)
    db.session.add(new_favorite_ad)
    db.session.commit()
    return jsonify({'message': 'Ad saved as favorite'})

@app.route('/get_favorite_ads/<int:user_id>', methods=['GET'])
def get_favorite_ads(user_id):
    favorite_ads = FavoriteAd.query.filter_by(user_id=user_id).all()
    ads = []
    for favorite_ad in favorite_ads:
        ad = Ad.query.get(favorite_ad.ad_id)
        ads.append(ad.to_dict())
    return jsonify({'ads': ads})