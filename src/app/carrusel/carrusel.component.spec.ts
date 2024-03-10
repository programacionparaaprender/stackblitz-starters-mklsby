import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosContactoComponent } from './servicios-contacto.component';

describe('ContactoLuisComponent', () => {
  let component: ServiciosContactoComponent;
  let fixture: ComponentFixture<ServiciosContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
