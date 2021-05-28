import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedalimentarComponent } from './feedalimentar.component';

describe('FeedalimentarComponent', () => {
  let component: FeedalimentarComponent;
  let fixture: ComponentFixture<FeedalimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedalimentarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedalimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
