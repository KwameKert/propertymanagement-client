import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AddPropertyOwnerComponent } from './components/add-property-owner/add-property-owner.component';
import { ListPropertyOwnerComponent } from './components/list-property-owner/list-property-owner.component';

const routes: Routes = [

  // {path: 'add_user', component: AddUserComponent},
  // {path: 'list_user', component: ListUserComponent},
  // {path: 'add_owner', component: AddPropertyOwnerComponent},
  // {path: 'list_owner', component: ListPropertyOwnerComponent},

]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
