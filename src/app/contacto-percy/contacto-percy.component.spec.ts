import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPercyComponent } from './contacto-percy.component';

describe('ContactoPercyComponent', () => {
  let component: ContactoPercyComponent;
  let fixture: ComponentFixture<ContactoPercyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoPercyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoPercyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
