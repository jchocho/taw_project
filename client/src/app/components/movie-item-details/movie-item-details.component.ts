import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from 'src/app/services/data.service';
import DataModel from "../../models/data-model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'movie-item-details',
  templateUrl: './movie-item-details.component.html',
  styleUrls: ['./movie-item-details.component.css'],
})
export class MovieItemDetailsComponent implements OnInit {
  public image: string = '';
  public text: string = '';
  public title: string = '';
  public rating: string = '';
  private id: string = '';

  constructor(public authService: AuthService, private service: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });

    this.service.getById(this.id).subscribe((res: DataModel) => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
      this.rating = res['rating'];
    });
  }

  // deleteMovie() {
  //   this.service.deleteMovie(this.id).subscribe(() => {
  //   });
  //   this.router.navigate(['/blog']);
  // }

  deleteMovie() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.service.deleteMovie(id).subscribe(() => {
    });
    this.router.navigate(['/movie']);
  }

  // deleteMovie() {
  //   const id = this.route.snapshot.paramMap.get('id') ?? '';
  //   this.service.deleteMovie(id).subscribe(() => {
  //     this.router.navigate(['/blog']);
  //   });
  // }

  // deleteMovie() {
  //   const id = this.route.snapshot.paramMap.get('id') ?? '';
  //   this.service.deleteMovie(id).subscribe(() => {
  //     this.router.navigate(['/blog']);
  //   });
  // }
}
