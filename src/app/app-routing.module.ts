import { NgModule } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OwnerLayoutComponent } from './layouts/owner-layout/owner-layout.component';
import { AuditorLayoutComponent } from './layouts/auditor-layout/auditor-layout.component';
import { AuthGuard, AdminGuard, OwnerGuard, AuditorGuard } from './guards';

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
  // canActivate:[AuthGuard, AdminGuard]                    
  // canActivate:[AuthGuard]                    
 },
 {
   path:'auditor', 
   component: AuditorLayoutComponent,
   loadChildren: () => import('./modules/auditor/auditor.module')
                      .then(m => m.AuditorModule),
   canActivate:[AuthGuard, AuditorGuard]                     
 },

 {
   path:'owner', 
   component: OwnerLayoutComponent,
   loadChildren: () => import('./modules/property-owner/property-owner.module')
                      .then(m => m.PropertyOwnerModule),
  canActivate:[AuthGuard, OwnerGuard]  
                    },


{path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
