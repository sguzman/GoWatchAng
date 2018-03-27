import {Component, Input, OnInit} from '@angular/core';
import {AnimeTopInterface} from '../../interfaces/anime.top.interface';

@Component({
  selector: 'app-anime-summary',
  templateUrl: './anime-summary.component.html',
  styleUrls: ['./anime-summary.component.css']
})
export class AnimeSummaryComponent implements OnInit {
  @Input() public item: AnimeTopInterface;
  @Input() public idx: number;

  constructor() { }

  ngOnInit() {
  }

}
