import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInoviceComponent } from './view-inovice.component';

describe('ViewInoviceComponent', () => {
  let component: ViewInoviceComponent;
  let fixture: ComponentFixture<ViewInoviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInoviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInoviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
