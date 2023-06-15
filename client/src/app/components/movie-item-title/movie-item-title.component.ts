import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'movie-item-title',
  templateUrl: './movie-item-title.component.html',
  styleUrls: ['./movie-item-title.component.css']
})
export class MovieItemTitleComponent implements OnInit {

  @Input() title?: string;
  @Input() id?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
