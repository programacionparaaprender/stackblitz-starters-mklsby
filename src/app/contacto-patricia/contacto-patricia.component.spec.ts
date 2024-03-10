import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoPatriciaComponent } from './contacto-patricia.component';

describe('ContactoPercyComponent', () => {
  let component: ContactoPatriciaComponent;
  let fixture: ComponentFixture<ContactoPatriciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoPatriciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoPatriciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
