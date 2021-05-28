import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JejumComponent } from './jejum.component';

describe('JejumComponent', () => {
  let component: JejumComponent;
  let fixture: ComponentFixture<JejumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JejumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JejumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
