import {Component, Input} from '@angular/core';

@Component({
  selector: 'movie-item-image',
  templateUrl: './movie-item-image.component.html',
  styleUrls: ['./movie-item-image.component.css']
})
export class MovieItemImageComponent {
  @Input() image?: string;
}
