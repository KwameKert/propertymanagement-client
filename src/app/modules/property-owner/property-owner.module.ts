import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PropertyOwnerRoutingModule } from './property-owner-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PropertyModule } from '../property/property.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [PropertyListComponent],
  imports: [
    CommonModule, 
    SharedModule,
    PropertyOwnerRoutingModule,
    PropertyModule,
    GoogleMapsModule,
    DashboardModule
  ]
})
export class PropertyOwnerModule { }
