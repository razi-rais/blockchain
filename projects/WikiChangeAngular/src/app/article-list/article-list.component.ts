import { Component, OnInit } from '@angular/core';

import { Article } from './article/article.model';
import { ArticleService } from './article/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  user = 12;
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles = [];

    this.articleService.get(this.user)
      .subscribe(articles => { this.articles = articles; }, error => { });
  }

}
