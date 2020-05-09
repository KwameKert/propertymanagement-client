import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyLocationComponent } from './components/property-location/property-location.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PropertyOwnerRoutingModule } from './property-owner-routing.module';



@NgModule({
  declarations: [PropertyListComponent, PropertyLocationComponent],
  imports: [
    CommonModule, 
    PropertyOwnerRoutingModule,
    DashboardModule
  ]
})
export class PropertyOwnerModule { }
