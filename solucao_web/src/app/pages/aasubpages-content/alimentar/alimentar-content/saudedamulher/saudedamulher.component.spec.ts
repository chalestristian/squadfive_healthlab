import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudedamulherComponent } from './saudedamulher.component';

describe('SaudedamulherComponent', () => {
  let component: SaudedamulherComponent;
  let fixture: ComponentFixture<SaudedamulherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudedamulherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudedamulherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
