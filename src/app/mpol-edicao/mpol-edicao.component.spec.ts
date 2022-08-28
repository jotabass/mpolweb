import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpolEdicaoComponent } from './mpol-edicao.component';

describe('MpolEdicaoComponent', () => {
  let component: MpolEdicaoComponent;
  let fixture: ComponentFixture<MpolEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpolEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpolEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
