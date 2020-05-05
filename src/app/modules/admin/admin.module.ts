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



@NgModule({
  declarations: [AdminComponent, ListAllPropertyComponent, AddUserComponent, ListUserComponent, PropertyLocationsComponent, AddPropertyComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    GoogleMapsModule
  ]
})
export class AdminModule { }
