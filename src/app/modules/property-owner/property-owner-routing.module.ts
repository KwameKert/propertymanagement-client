import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent} from '../dashboard';


const routes: Routes = [

    {path: 'dashboard', component: OwnerComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyOwnerRoutingModule { }
