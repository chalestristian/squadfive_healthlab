import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarboidratosComponent } from './carboidratos.component';

describe('CarboidratosComponent', () => {
  let component: CarboidratosComponent;
  let fixture: ComponentFixture<CarboidratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarboidratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarboidratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
