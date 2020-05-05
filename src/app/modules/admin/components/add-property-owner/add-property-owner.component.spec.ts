import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyOwnerComponent } from './add-property-owner.component';

describe('AddPropertyOwnerComponent', () => {
  let component: AddPropertyOwnerComponent;
  let fixture: ComponentFixture<AddPropertyOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertyOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
