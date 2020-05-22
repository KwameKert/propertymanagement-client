import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorComponent } from './components/collector/collector.component';
import { OwnerComponent } from './components/owner/owner.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { AuditorComponent } from './components/auditor/auditor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CollectorComponent, OwnerComponent, AuditorComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    SharedModule
  ],
  exports: [
    CollectorComponent, 
    GoogleMapsModule,
    OwnerComponent,
    AuditorComponent
  ]
})
export class DashboardModule { }
