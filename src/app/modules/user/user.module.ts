import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddPropertyOwnerComponent } from './components/add-property-owner/add-property-owner.component';
import { ListPropertyOwnerComponent } from './components/list-property-owner/list-property-owner.component';



@NgModule({
  declarations: [AddUserComponent, ListUserComponent, AddPropertyOwnerComponent, ListPropertyOwnerComponent],
  imports: [
    CommonModule,
    UserRoutingModule, 
    SharedModule
  ]
})
export class UserModule { }
