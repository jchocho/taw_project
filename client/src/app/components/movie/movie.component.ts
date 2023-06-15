import {Component, Input, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import DataModel from "../../models/data-model";

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() filterTitle: string = '';
  public items$!: DataModel[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.dataService.getAll().subscribe((data) => {
      this.items$ = data;
      console.log(data);
    });
  }
}
