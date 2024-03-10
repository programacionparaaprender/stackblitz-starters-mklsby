import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaProfesionalesComponent } from './agencia-profesionales.component';

describe('AgenciaProfesionalesComponent', () => {
  let component: AgenciaProfesionalesComponent;
  let fixture: ComponentFixture<AgenciaProfesionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaProfesionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaProfesionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
