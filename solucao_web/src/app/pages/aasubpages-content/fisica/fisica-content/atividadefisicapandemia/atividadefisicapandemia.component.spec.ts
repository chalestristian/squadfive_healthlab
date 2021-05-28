import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadefisicapandemiaComponent } from './atividadefisicapandemia.component';

describe('AtividadefisicapandemiaComponent', () => {
  let component: AtividadefisicapandemiaComponent;
  let fixture: ComponentFixture<AtividadefisicapandemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadefisicapandemiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadefisicapandemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
