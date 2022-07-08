import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCadastroComponent } from './detalhes-cadastro.component';

describe('DetalhesCadastroComponent', () => {
  let component: DetalhesCadastroComponent;
  let fixture: ComponentFixture<DetalhesCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
