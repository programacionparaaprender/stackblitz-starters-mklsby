import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaEmpresasComponent } from './agencia-empresas.component';

describe('AgenciaEmpresasComponent', () => {
  let component: AgenciaEmpresasComponent;
  let fixture: ComponentFixture<AgenciaEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
