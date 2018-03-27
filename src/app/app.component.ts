import { Component } from '@angular/core';
import {AnimeTopInterface} from '../interfaces/anime.top.interface';

declare var shows;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public shows: AnimeTopInterface[];

  constructor() {
    this.shows = Object.keys(shows).map(a => shows[a]);
    this.shows.sort((a, b) => a.animeHash.animeEps.anime.title.localeCompare(b.animeHash.animeEps.anime.title));
    console.log('Hello Page home');
  }
}
