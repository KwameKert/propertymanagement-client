import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditorComponent } from '../dashboard';
import { AllTransactionsComponent } from '../finance/components/all-transactions/all-transactions.component';



const routes: Routes  = [
    {path: 'dashboard', component: AuditorComponent},
    {path: 'all_transaction', component: AllTransactionsComponent},
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuditorRoutingModule { }
  