import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPropertyOwnerComponent } from './components/add-property-owner/add-property-owner.component';
import { ListPropertyOwnerComponent } from './components/list-property-owner/list-property-owner.component';



@NgModule({
  declarations: [AddPropertyOwnerComponent, ListPropertyOwnerComponent],
  imports: [
    CommonModule,
    UserRoutingModule, 
    SharedModule
  ]
})
export class UserModule { }
