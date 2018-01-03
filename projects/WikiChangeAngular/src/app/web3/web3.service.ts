import { Injectable } from '@angular/core';

import { CONFIG } from '../core';
import Web3 = require('web3');

@Injectable()
export class Web3Service {

  constructor() { }

  init() {
    const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.baseUrls.web3));
    const version = web3.version;

    var contractId = "0x551db3f1ee78e4e35b337fd10589719bb2f14df4";
    var abi = [{ "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "title", "type": "string" }, { "name": "url", "type": "string" }, { "name": "revision_old", "type": "uint256" }, { "name": "revision_new", "type": "uint256" }, { "name": "timestamp", "type": "uint256" }, { "name": "change_type", "type": "string" }, { "name": "user", "type": "string" }, { "name": "comment", "type": "string" }], "name": "UpdateArticleHistory", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "", "type": "address" }, { "indexed": false, "name": "id", "type": "uint256" }, { "indexed": false, "name": "title", "type": "string" }, { "indexed": false, "name": "url", "type": "string" }, { "indexed": false, "name": "revision_old", "type": "uint256" }, { "indexed": false, "name": "revision_new", "type": "uint256" }, { "indexed": false, "name": "timestamp", "type": "uint256" }, { "indexed": false, "name": "change_type", "type": "string" }, { "indexed": false, "name": "user", "type": "string" }, { "indexed": false, "name": "comment", "type": "string" }], "name": "articleUpdateEvent", "type": "event" }];
  
    var contractInstance = new web3.eth.Contract(abi, contractId);

    contractInstance.getPastEvents('articleUpdateEvent', {
      fromBlock: 0,
      toBlock: 'latest'
    }, function (error, events) { console.log(events); })
        .then(function (events) {
            console.log(events)
        });

   }

}
