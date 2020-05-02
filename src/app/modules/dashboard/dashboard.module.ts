import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { CollectorComponent } from './components/collector/collector.component';
import { OwnerComponent } from './components/owner/owner.component';
import { DashboardRoutingModule } from './dashboard-routing';
import {GoogleMapsModule} from '@angular/google-maps';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AdminComponent, CollectorComponent, OwnerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GoogleMapsModule,
    MatCardModule
  ]
})
export class DashboardModule { }
