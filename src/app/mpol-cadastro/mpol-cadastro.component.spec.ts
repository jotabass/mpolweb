import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpolCadastroComponent } from './mpol-cadastro.component';

describe('MpolCadastroComponent', () => {
  let component: MpolCadastroComponent;
  let fixture: ComponentFixture<MpolCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpolCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpolCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
