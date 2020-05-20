import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyRoutingModule } from './property-routing.module';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [ViewPropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    GoogleMapsModule,
    SharedModule
    
  ],
  exports: [
    ViewPropertyComponent
  ]
})
export class PropertyModule { }
