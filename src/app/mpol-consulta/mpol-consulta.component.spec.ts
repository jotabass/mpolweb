import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpolConsultaComponent } from './mpol-consulta.component';

describe('MpolConsultaComponent', () => {
  let component: MpolConsultaComponent;
  let fixture: ComponentFixture<MpolConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpolConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpolConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
