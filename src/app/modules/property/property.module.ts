import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllPropertyComponent } from '../admin/components/list-all-property/list-all-property.component';
import { PropertyRoutingModule } from './property-routing.module';
import { ViewPropertyComponent } from './components/view-property/view-property.component';


@NgModule({
  declarations: [ViewPropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
    
  ],
  exports: [
    ViewPropertyComponent
  ]
})
export class PropertyModule { }
