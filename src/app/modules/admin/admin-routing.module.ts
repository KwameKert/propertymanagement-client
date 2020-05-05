import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ListAllPropertyComponent } from './components/list-all-property/list-all-property.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { PropertyLocationsComponent } from './components/property-locations/property-locations.component';
import { AddPropertyOwnerComponent } from './components/add-property-owner/add-property-owner.component';
import { ListOwnerComponent } from './components/list-owner/list-owner.component';

const routes: Routes  = [

    {path: 'dashboard', component: AdminComponent},
    {path: 'list_property', component: ListAllPropertyComponent},
    {path: 'list_user', component: ListUserComponent},
    {path: 'property_location', component: PropertyLocationsComponent},
    {path: 'add_property_owner', component: AddPropertyOwnerComponent},
    {path: 'list_owner', component:ListOwnerComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
