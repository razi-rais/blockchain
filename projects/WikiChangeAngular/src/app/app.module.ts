import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import './core/rxjs-extensions';
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { ArticleService } from './article-list/article/article.service';
import { ArticleListComponent } from './article-list/article-list.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WatchComponent } from './watch/watch.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    DashboardComponent,
    WatchComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,

    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
