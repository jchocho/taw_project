import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  public filterTitle: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string): void {
    this.filterTitle = $event;
  }
}
