import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemTitleComponent } from './movie-item-title.component';

describe('BlogItemTextComponent', () => {
  let component: MovieItemTitleComponent;
  let fixture: ComponentFixture<MovieItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieItemTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
