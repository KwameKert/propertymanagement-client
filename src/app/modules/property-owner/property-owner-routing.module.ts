import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent} from '../dashboard';
import { PropertyListComponent } from './components/property-list/property-list.component';


const routes: Routes = [

    {path: 'dashboard', component: OwnerComponent},
    {path: 'properties', component: PropertyListComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyOwnerRoutingModule { }
