import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenosacucarComponent } from './menosacucar.component';

describe('MenosacucarComponent', () => {
  let component: MenosacucarComponent;
  let fixture: ComponentFixture<MenosacucarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenosacucarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenosacucarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
