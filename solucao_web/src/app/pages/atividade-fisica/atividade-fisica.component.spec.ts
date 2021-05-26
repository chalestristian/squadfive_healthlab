import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeFisicaComponent } from './atividade-fisica.component';

describe('AtividadeFisicaComponent', () => {
  let component: AtividadeFisicaComponent;
  let fixture: ComponentFixture<AtividadeFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
