import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoquarentenaComponent } from './pesoquarentena.component';

describe('PesoquarentenaComponent', () => {
  let component: PesoquarentenaComponent;
  let fixture: ComponentFixture<PesoquarentenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesoquarentenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesoquarentenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
