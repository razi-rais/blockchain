import json
from flask import request, url_for, jsonify
from flask_api import FlaskAPI, status, exceptions
from flask_cors import CORS
import web3
from web3 import Web3, HTTPProvider

app = FlaskAPI(__name__)
CORS(app) 

#TODO: Following values should be passed through enviroment variables 
web3_url= "http://localhost:8545"
account = "0x71979142f6b672e0bfd23264413a4abc2cb501fa"
contract_address = "0x36be34bf71dbee5de71e43f0adf118aa3c7e0b01"
abi = json.loads('[{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"request_id","type":"string"},{"name":"title","type":"string"},{"name":"url","type":"string"},{"name":"revision_old","type":"uint256"},{"name":"revision_new","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"change_type","type":"string"},{"name":"user","type":"string"},{"name":"comment","type":"string"}],"name":"UpdateArticleHistory","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"address"},{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"url","type":"string"},{"indexed":false,"name":"revision_old","type":"uint256"},{"indexed":false,"name":"revision_new","type":"uint256"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"change_type","type":"string"},{"indexed":false,"name":"user","type":"string"},{"indexed":false,"name":"comment","type":"string"}],"name":"articleUpdateEvent","type":"event"}]')
gas = 100000

def create_message(msg,code):
    message = {
            'status': code,
            'message': str(msg),
    }
    resp = jsonify(message)
    resp.status_code = code
    return resp
        
@app.route("/", methods=['POST'])
def update_article():
    
   if request.method == 'POST':

    data = json.loads(request.json)
    web3 = Web3(HTTPProvider(web3_url))
    #web3.personal.unlockAccount(account,'the-passphrase')
    wiki_contract = web3.eth.contract(contract_address,abi=abi)
    tx_receipt = wiki_contract.transact({'from': account, 'gas': gas}).UpdateArticleHistory(int(data['id']),
                                                                                            data['request_id'],
                                                                                            data['title'],
                                                                                            data['uri'],
                                                                                            data['revision_old'],
                                                                                            data['revision_new'],
                                                                                            data['timestamp'],
                                                                                            data['change_type'],
                                                                                            data['user'],
                                                                                            data['comment'])
   
   return create_message(tx_receipt,200);

 
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8081)
