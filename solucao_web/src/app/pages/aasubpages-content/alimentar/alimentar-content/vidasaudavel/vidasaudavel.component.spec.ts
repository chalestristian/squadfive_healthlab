import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidasaudavelComponent } from './vidasaudavel.component';

describe('VidasaudavelComponent', () => {
  let component: VidasaudavelComponent;
  let fixture: ComponentFixture<VidasaudavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidasaudavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidasaudavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
