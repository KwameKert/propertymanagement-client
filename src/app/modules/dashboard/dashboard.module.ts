import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorComponent } from './components/collector/collector.component';
import { OwnerComponent } from './components/owner/owner.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [CollectorComponent, OwnerComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatCardModule
  ],
  exports: [
    CollectorComponent, 
    GoogleMapsModule,
    OwnerComponent
  ]
})
export class DashboardModule { }
