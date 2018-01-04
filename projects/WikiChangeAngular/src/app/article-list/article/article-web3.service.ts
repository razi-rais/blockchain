import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import Web3 = require('web3');

import { CONFIG } from '../../core';
import { Article } from './article.model';

@Injectable()
export class ArticleWeb3Service {

  constructor() { }

  startPolling(): Observable<Article[]> {

    const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.baseUrls.web3));

    const contractInstance = new web3.eth.Contract(CONFIG.web3.jsonContract, CONFIG.web3.contractId);

    return Observable.create((observer: Observer<Article[]>) => {
      let timeoutId = null;

      const getArticles = () => {
        timeoutId = null;
        contractInstance.getPastEvents('articleUpdateEvent',
          {
            fromBlock: 0,
            toBlock: 'latest'
          })
          .then((events) => {
            if (observer.closed) { return; }
            observer.next(events.map(ev => ev.returnValues as Article));
            timeoutId = setTimeout(getArticles, CONFIG.web3.pollInteval);
          })
          .catch((error) => {
            console.error(error);
            return observer.error('Error getting articles');
          });
      };

      getArticles();

      return () => {
        if (timeoutId != null) {
          clearTimeout(timeoutId);
        }
      };
    });

  }

}
