import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciobeneficiosComponent } from './exerciciobeneficios.component';

describe('ExerciciobeneficiosComponent', () => {
  let component: ExerciciobeneficiosComponent;
  let fixture: ComponentFixture<ExerciciobeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciobeneficiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciobeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
