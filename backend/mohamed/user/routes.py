from user import app, db, oauth
from flask import request, jsonify, url_for, session
from flask_bcrypt import Bcrypt
from flask_login import login_user, LoginManager, login_required, logout_user
from user.form import LoginForm, RegisterForm
from user.models import User, users_schema, user_schema


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

@app.route('/login', methods=['POST'])
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


@app.route('/user/<id>', methods=['PUT'])
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


