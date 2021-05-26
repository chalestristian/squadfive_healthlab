import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalEmocionalComponent } from './mental-emocional.component';

describe('MentalEmocionalComponent', () => {
  let component: MentalEmocionalComponent;
  let fixture: ComponentFixture<MentalEmocionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalEmocionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalEmocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
