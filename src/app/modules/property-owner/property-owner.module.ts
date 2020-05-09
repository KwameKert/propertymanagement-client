import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PropertyOwnerRoutingModule } from './property-owner-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PropertyListComponent],
  imports: [
    CommonModule, 
    SharedModule,
    PropertyOwnerRoutingModule,
    DashboardModule
  ]
})
export class PropertyOwnerModule { }
