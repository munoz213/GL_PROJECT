from annonce import  db,app1
from annonce.models import Ad,Photo,Message, FavoriteAd
from flask import  jsonify, request
import os





@app1.route('/post_ad', methods=['GET', 'POST'])
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


@app1.route('/ads')
def get_ads():
    ads = Ad.query.order_by(Ad.date_posted.desc(),Ad.id.desc()).all()
    return jsonify([ad.to_dict() for ad in ads])

@app1.route('/search_ad', methods=['GET'])
def search_ad():
    search_query = request.args.get('q')
    ads = Ad.query.filter(Ad.titre.like('%' + search_query + '%') | Ad.description.like('%' + search_query + '%')).all()
    return jsonify([ad.to_dict() for ad in ads]), 200


@app1.route('/filter_ads', methods=['GET'])
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


@app1.route('/annonce/<int:id>')
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


@app1.route('/annonce/<int:id>/message', methods=['POST'])
def send_message(id):
    sender_id = request.form.get('sender_id')
    message = request.form.get('message')
    offer = request.form.get('offer')

    new_message = Message(ad_id=id, sender_id=sender_id, message=message, offer=offer)
    db.session.add(new_message)
    db.session.commit()

    return jsonify({'status': 'success'})


@app1.route('/message/<int:ad_id>', methods=['GET'])
def get_messages(ad_id):
    messages = Message.query.filter_by(ad_id=ad_id).all()
    return jsonify([{'sender_name': message.sender_name, 'message': message.message, 'offer': message.offer} for message in messages])


@app1.route('/annonces', methods=['GET'])
def get_annonces():
    user_id = request.args.get('user_id')
    if user_id is None:
        return jsonify({'error': 'user_id est requis'}), 400
    annonces = Ad.query.filter_by(annonceur_id=user_id).all()
    return jsonify([a.to_dict() for a in annonces])

@app1.route('/save_favorite_ad', methods=['POST'])
def save_favorite_ad():
    user_id = request.form['user_id']
    ad_id = request.form['ad_id']
    new_favorite_ad = FavoriteAd(user_id=user_id, ad_id=ad_id)
    db.session.add(new_favorite_ad)
    db.session.commit()
    return jsonify({'message': 'Ad saved as favorite'})

@app1.route('/get_favorite_ads/<int:user_id>', methods=['GET'])
def get_favorite_ads(user_id):
    favorite_ads = FavoriteAd.query.filter_by(user_id=user_id).all()
    ads = []
    for favorite_ad in favorite_ads:
        ad = Ad.query.get(favorite_ad.ad_id)
        ads.append(ad.to_dict())
    return jsonify({'ads': ads})