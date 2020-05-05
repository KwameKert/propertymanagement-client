import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AdminComponent } from  '../admin/components/admin/admin.component';
import { CollectorComponent } from './components/collector/collector.component';
import { OwnerComponent } from './components/owner/owner.component';


const routes: Routes = [ 

 // {path: 'admin-dashboard', component:  AdminComponent},

  {path: 'collector-dashboard', component: CollectorComponent},

  {path: 'owner-dashboard', component: OwnerComponent}  

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

