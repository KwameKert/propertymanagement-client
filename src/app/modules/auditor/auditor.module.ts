import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditorRoutingModule } from './auditor-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuditorRoutingModule,
    DashboardModule,
    ChartsModule,
    SharedModule
  ]
})
export class AuditorModule { }
