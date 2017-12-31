
import json
from flask import request, url_for, jsonify
from flask_api import FlaskAPI, status, exceptions
from flask_cors import CORS
import web3
from web3 import Web3, HTTPProvider

app = FlaskAPI(__name__)
CORS(app) 

web3_url= "http://localhost:8545"
contract_address = ""

def create_message(msg,code):
    message = {
            'status': code,
            'message': str(msg),
    }
    resp = jsonify(message)
    resp.status_code = code

    #For dev only, remove this for production.  In prod, 
    resp.headers['Access-Control-Allow-Origin'] = '*'

    return resp
        
@app.route("/", methods=['POST'])
def save_article():
    
   if request.method == 'POST':
     
   # web3.py instance
    web3 = Web3(HTTPProvider(web3_url))
    #account = "0xF099F16A5217cF328e4180b893eA2D612dd99a0F";
    #balance = web3.eth.getBalance(account)
    account = web3.personal.newAccount('the-passphrase')
    account2 = "0x89e8ca895b804b2ba2fa4bd57fd9928660ad3dea"
    web3.personal.unlockAccount(account,'the-passphrase')
    tx = web3.eth.sendTransaction({'to': account, 'from': account2 , 'value': 1})

    data = request.json
   
     
   return create_message("Item added/updated successfully",200);

@app.route("/GetArticlesByUserID", methods=['GET'])
def get_articles_by_userid():

  if request.method == 'GET':
       
    user_id = request.args.get('userID')
     
    return create_message("",200)

 
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8081)
