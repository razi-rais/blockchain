import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import './core/rxjs-extensions';
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { ArticleListComponent } from './article-list/article-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WatchComponent } from './watch/watch.component';

import { ArticleService } from './article-list/article/article.service';
import { ArticleWeb3Service } from './article-list/article/article-web3.service';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,

    CoreModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ArticleListComponent,
    DashboardComponent,
    NavigationComponent,
    WatchComponent
  ],
  providers: [ArticleService, ArticleWeb3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
