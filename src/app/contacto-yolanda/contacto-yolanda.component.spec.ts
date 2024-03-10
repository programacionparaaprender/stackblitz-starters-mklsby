import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoYolandaComponent } from './contacto-yolanda.component';

describe('ContactoPercyComponent', () => {
  let component: ContactoYolandaComponent;
  let fixture: ComponentFixture<ContactoYolandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoYolandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoYolandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
