import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from 'src/app/services/data.service';
import {waitForAsync} from "@angular/core/testing";

@Component({
  selector: 'addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent implements OnInit {
  public movie = {
    title: '',
    image: '',
    text: '',
    rating: ''
  };

  constructor(private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.dataService.add(this.movie).subscribe((result) => {
      setTimeout(() => {
        this.router.navigate(['/movie']);
      }, 1000); // Opóźnienie wynosi 1000 ms (1 sekunda)
    });
  }

}
