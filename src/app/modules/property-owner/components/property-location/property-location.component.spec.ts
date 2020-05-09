import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLocationComponent } from './property-location.component';

describe('PropertyLocationComponent', () => {
  let component: PropertyLocationComponent;
  let fixture: ComponentFixture<PropertyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
