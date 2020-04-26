import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { CollectorComponent } from './components/collector/collector.component';
import { OwnerComponent } from './components/owner/owner.component';



@NgModule({
  declarations: [AdminComponent, CollectorComponent, OwnerComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
