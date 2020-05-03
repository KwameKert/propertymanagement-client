import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule, 
    SharedModule
  ]
})
export class UserModule { }
