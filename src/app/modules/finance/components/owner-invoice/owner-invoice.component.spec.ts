import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerInvoiceComponent } from './owner-invoice.component';

describe('OwnerInvoiceComponent', () => {
  let component: OwnerInvoiceComponent;
  let fixture: ComponentFixture<OwnerInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
