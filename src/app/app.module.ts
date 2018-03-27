import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {NgxPaginationModule} from 'ngx-pagination';
import { AnimeComponent } from './anime/anime.component';
import { AnimeSummaryComponent } from './anime-summary/anime-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    AnimeSummaryComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
