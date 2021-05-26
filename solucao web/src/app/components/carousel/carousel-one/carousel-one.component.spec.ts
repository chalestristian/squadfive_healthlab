import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOneComponent } from './carousel-one.component';

describe('CarouselOneComponent', () => {
  let component: CarouselOneComponent;
  let fixture: ComponentFixture<CarouselOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
