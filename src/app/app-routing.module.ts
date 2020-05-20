import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DefaultComponent} from './layouts/default/default.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CollectorLayoutComponent } from './layouts/collector-layout/collector-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { AuthGuard } from './guards/components/auth.guard';

const routes: Routes= [
{
  path:'', 
  component: AuthLayoutComponent,
  loadChildren: () => import('./modules/authentication/authentication.module')
                     .then(m => m.AuthenticationModule)
},

 {
   path:'admin', 
   component: AdminLayoutComponent,
   loadChildren: () => import('./modules/admin/admin.module')
                      .then(m => m.AdminModule),
   canActivate:[AuthGuard]                    
 },
//  {
//    path:'', 
//    component: CollectorLayoutComponent,
//    loadChildren: () => import('./modules/dashboard/dashboard.module')
//                       .then(m => m.DashboardModule),
//    canActivate:[AuthGuard]                     
//  },

 {
   path:'owner', 
   component: OwnerLayoutComponent,
   loadChildren: () => import('./modules/property-owner/property-owner.module')
                      .then(m => m.PropertyOwnerModule),
  canActivate:[AuthGuard]  
                    },


{path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
