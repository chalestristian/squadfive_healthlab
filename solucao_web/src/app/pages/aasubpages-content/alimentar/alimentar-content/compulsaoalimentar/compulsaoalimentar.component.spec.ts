import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompulsaoalimentarComponent } from './compulsaoalimentar.component';

describe('CompulsaoalimentarComponent', () => {
  let component: CompulsaoalimentarComponent;
  let fixture: ComponentFixture<CompulsaoalimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompulsaoalimentarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompulsaoalimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
