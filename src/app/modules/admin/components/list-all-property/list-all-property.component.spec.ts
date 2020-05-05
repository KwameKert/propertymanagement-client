import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllPropertyComponent } from './list-all-property.component';

describe('ListAllPropertyComponent', () => {
  let component: ListAllPropertyComponent;
  let fixture: ComponentFixture<ListAllPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
