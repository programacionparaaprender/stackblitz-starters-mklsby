import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestriaSanMarcosComponent } from './maestria-sanmarcos.component';

describe('MaestriaSanMarcosComponent', () => {
  let component: MaestriaSanMarcosComponent;
  let fixture: ComponentFixture<MaestriaSanMarcosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestriaSanMarcosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestriaSanMarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
