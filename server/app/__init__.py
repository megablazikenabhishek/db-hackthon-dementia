from flask import Flask
from routes.routes import main_bp

def create_app():
    app = Flask(__name__)
    app.debug = True
    app.register_blueprint(main_bp)

    return app