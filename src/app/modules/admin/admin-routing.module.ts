import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ListAllPropertyComponent } from './components/list-all-property/list-all-property.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { PropertyLocationsComponent } from './components/property-locations/property-locations.component';
import { AddPropertyOwnerComponent } from './components/add-property-owner/add-property-owner.component';
import { ListOwnerComponent } from './components/list-owner/list-owner.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';

const routes: Routes  = [

    {path: 'dashboard', component: AdminComponent},
    {path: 'list_property', component: ListAllPropertyComponent},
    {path: 'list_user', component: ListUserComponent},
    {path: 'property_location', component: PropertyLocationsComponent},
    {path: 'add_property_owner', component: AddPropertyOwnerComponent},
    {path: 'list_owner', component:ListOwnerComponent},
    {path: 'edit_property/:id', component:EditPropertyComponent},
    {path: 'view_property/:id', component:ViewPropertyComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
