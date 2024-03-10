import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoAnaComponent } from './contacto-ana.component';

describe('ContactoPercyComponent', () => {
  let component: ContactoAnaComponent;
  let fixture: ComponentFixture<ContactoAnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoAnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoAnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
