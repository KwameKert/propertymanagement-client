import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from  './components/admin/admin.component';
import { CollectorComponent } from './components/collector/collector.component';
import { OwnerComponent } from './components/owner/owner.component';


const routes: Routes = [ 

  {path: 'admin', component:  AdminComponent},

  {path: 'collector', component: CollectorComponent},

  {path: 'owner', component: OwnerComponent}  

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

