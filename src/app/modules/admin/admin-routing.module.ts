import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ListAllPropertyComponent } from './components/list-all-property/list-all-property.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes  = [

    {path: 'dashboard', component: AdminComponent},
    {path: 'list_property', component: ListAllPropertyComponent},
    {path: 'list_user', component: ListUserComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
