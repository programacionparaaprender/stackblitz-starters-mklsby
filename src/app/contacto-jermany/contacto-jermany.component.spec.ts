import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoJermanyComponent } from './contacto-jermany.component';

describe('ContactoPercyComponent', () => {
  let component: ContactoJermanyComponent;
  let fixture: ComponentFixture<ContactoJermanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoJermanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoJermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
