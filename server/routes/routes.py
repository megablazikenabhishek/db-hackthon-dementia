import json
from flask import Blueprint, request
from run import chat_engine

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return json.dumps({"message": "Hello, World!"})	

@main_bp.route('/query', methods=['GET'])
def query():
    # get query
    query = request.args.get('query')
    
    # fetch response
    response = chat_engine.chat(query)
    
    return json.dumps({"response": response.response})