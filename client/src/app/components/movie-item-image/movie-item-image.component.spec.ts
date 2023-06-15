import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemImageComponent } from './movie-item-image.component';

describe('MovieItemImageComponent', () => {
  let component: MovieItemImageComponent;
  let fixture: ComponentFixture<MovieItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
