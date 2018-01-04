import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';

import { Article } from './article/article.model';
import { ArticleWeb3Service } from './article/article-web3.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  private subscription: ISubscription;
  articles: Article[] = [];

  constructor(private articleWeb3Service: ArticleWeb3Service) { }

  ngOnInit() {
    this.getArticles();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getArticles() {
    this.articles = [];

    this.subscription = this.articleWeb3Service.startPolling()
      .subscribe(articles => { this.articles = articles; }, error => { });
  }

}
