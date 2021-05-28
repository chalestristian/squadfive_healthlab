import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadefisicaesaudeComponent } from './atividadefisicaesaude.component';

describe('AtividadefisicaesaudeComponent', () => {
  let component: AtividadefisicaesaudeComponent;
  let fixture: ComponentFixture<AtividadefisicaesaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadefisicaesaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadefisicaesaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
