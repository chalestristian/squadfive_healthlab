import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComentShareSalveComponent } from './like-coment-share-salve.component';

describe('LikeComentShareSalveComponent', () => {
  let component: LikeComentShareSalveComponent;
  let fixture: ComponentFixture<LikeComentShareSalveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeComentShareSalveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComentShareSalveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
