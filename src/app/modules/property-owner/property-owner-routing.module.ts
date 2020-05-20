import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent} from '../dashboard';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { ViewPropertyComponent } from '../property/components/view-property/view-property.component';


const routes: Routes = [

    {path: 'dashboard', component: OwnerComponent},
    {path: 'properties', component: PropertyListComponent},
    {path: 'view-property', component: ViewPropertyComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyOwnerRoutingModule { }
