import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorLayoutComponent } from './collector-layout.component';

describe('CollectorLayoutComponent', () => {
  let component: CollectorLayoutComponent;
  let fixture: ComponentFixture<CollectorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
