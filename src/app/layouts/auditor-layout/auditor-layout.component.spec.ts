import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorLayoutComponent } from './auditor-layout.component';

describe('AuditorLayoutComponent', () => {
  let component: AuditorLayoutComponent;
  let fixture: ComponentFixture<AuditorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
