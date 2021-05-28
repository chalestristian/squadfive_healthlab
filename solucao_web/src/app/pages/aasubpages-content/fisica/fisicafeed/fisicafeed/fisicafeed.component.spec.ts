import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisicafeedComponent } from './fisicafeed.component';

describe('FisicafeedComponent', () => {
  let component: FisicafeedComponent;
  let fixture: ComponentFixture<FisicafeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisicafeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FisicafeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
