import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent} from '../dashboard';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { ViewPropertyComponent } from '../property/components/view-property/view-property.component';
import { OwnerInvoiceComponent} from '../finance';
import { MakeDepositComponent } from '../finance/components/make-deposit/make-deposit.component';

const routes: Routes = [

    {path: 'dashboard', component: OwnerComponent},
    {path: 'properties', component: PropertyListComponent},
    {path: 'view_property/:id', component: ViewPropertyComponent},
    {path: 'invoices', component: OwnerInvoiceComponent },
    {path: 'make-deposit/:id', component: MakeDepositComponent }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyOwnerRoutingModule { }
