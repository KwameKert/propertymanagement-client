import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditorComponent } from '../dashboard';



const routes: Routes  = [
    {path: 'dashboard', component: AuditorComponent}
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuditorRoutingModule { }
  