import { Injectable } from '@angular/core';

import { CONFIG } from '../core';
import Web3 = require('web3');

@Injectable()
export class Web3Service {

  constructor() { }

  init() {
    const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.baseUrls.web3));
    const version = web3.version;
  }

}
