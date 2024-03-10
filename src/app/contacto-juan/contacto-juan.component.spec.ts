import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoJuanComponent } from './contacto-juan.component';

describe('ContactoPercyComponent', () => {
  let component: ContactoJuanComponent;
  let fixture: ComponentFixture<ContactoJuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoJuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
