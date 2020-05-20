import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInvoicesComponent } from './components/list-invoices/list-invoices.component';
import { GenerateBillComponent } from './components/generate-bill/generate-bill.component';
import { SharedModule } from '../shared/shared.module';
import { ViewInoviceComponent } from './components/view-inovice/view-inovice.component';
import { OwnerInvoiceComponent } from './components/owner-invoice/owner-invoice.component';



@NgModule({
  declarations: [ GenerateBillComponent, ListInvoicesComponent, ViewInoviceComponent, OwnerInvoiceComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GenerateBillComponent, ListInvoicesComponent
  ]
})
export class FinanceModule { }
