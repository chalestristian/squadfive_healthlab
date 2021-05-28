import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beneficiosomega3Component } from './beneficiosomega3.component';

describe('Beneficiosomega3Component', () => {
  let component: Beneficiosomega3Component;
  let fixture: ComponentFixture<Beneficiosomega3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Beneficiosomega3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Beneficiosomega3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
