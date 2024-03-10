import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprenderInternetComponent } from './emprender-internet.component';

describe('EmprenderInternetComponent', () => {
  let component: EmprenderInternetComponent;
  let fixture: ComponentFixture<EmprenderInternetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprenderInternetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprenderInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
