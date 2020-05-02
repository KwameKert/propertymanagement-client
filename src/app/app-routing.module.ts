import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DefaultComponent} from './layouts/default/default.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CollectorLayoutComponent } from './layouts/collector-layout/collector-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes= [
{
  path:'', 
  component: AuthLayoutComponent,
  loadChildren: () => import('./modules/authentication/authentication.module')
                     .then(m => m.AuthenticationModule)
},

 {
   path:'', 
   component: AdminLayoutComponent,
   loadChildren: () => import('./modules/dashboard/dashboard.module')
                      .then(m => m.DashboardModule),
   canActivate:[AuthGuard]                    
 },
 {
   path:'', 
   component: CollectorLayoutComponent,
   loadChildren: () => import('./modules/dashboard/dashboard.module')
                      .then(m => m.DashboardModule),
   canActivate:[AuthGuard]                     
 },
 {
   path:'', 
   component: OwnerLayoutComponent,
   loadChildren: () => import('./modules/dashboard/dashboard.module')
                      .then(m => m.DashboardModule),
  canActivate:[AuthGuard]  
                    },


{path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
