import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoLuisComponent } from './contacto-luis.component';

describe('ContactoLuisComponent', () => {
  let component: ContactoLuisComponent;
  let fixture: ComponentFixture<ContactoLuisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoLuisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoLuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
