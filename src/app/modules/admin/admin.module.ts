import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps'
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ListAllPropertyComponent } from './components/list-all-property/list-all-property.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { PropertyLocationsComponent } from './components/property-locations/property-locations.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { AddPropertyOwnerComponent } from './components/add-property-owner/add-property-owner.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { ListOwnerComponent } from './components/list-owner/list-owner.component';
import { SearchOwnerComponent } from './components/search-owner/search-owner.component';
import { EditPropertyComponent } from './components/edit-property/edit-property.component';




@NgModule({
  declarations: [AdminComponent, ListAllPropertyComponent, AddUserComponent, ListUserComponent, PropertyLocationsComponent, AddPropertyComponent, AddPropertyOwnerComponent, AddOwnerComponent, ListOwnerComponent, SearchOwnerComponent, EditPropertyComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    GoogleMapsModule
  ]
})
export class AdminModule { }
