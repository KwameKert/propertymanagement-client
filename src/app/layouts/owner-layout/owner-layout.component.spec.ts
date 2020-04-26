import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLayoutComponent } from './owner-layout.component';

describe('OwnerLayoutComponent', () => {
  let component: OwnerLayoutComponent;
  let fixture: ComponentFixture<OwnerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
