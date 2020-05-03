import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertyOwnerComponent } from './list-property-owner.component';

describe('ListPropertyOwnerComponent', () => {
  let component: ListPropertyOwnerComponent;
  let fixture: ComponentFixture<ListPropertyOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropertyOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropertyOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
