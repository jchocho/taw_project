import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public filterTitle: string = '';

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterTitle = params['name'];
      this.sendFilter();
    });
  }

  sendFilter(): void {
    this.name.emit(this.filterTitle);
    this.router.navigate(['/movie'], {
      queryParams: {
        name:
        this.filterTitle
      }
    });
  }
}
