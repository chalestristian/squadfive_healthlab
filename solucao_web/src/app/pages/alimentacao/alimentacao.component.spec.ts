import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentacaoComponent } from './alimentacao.component';

describe('AlimentacaoComponent', () => {
  let component: AlimentacaoComponent;
  let fixture: ComponentFixture<AlimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
