import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { Full_ROUTES } from './shared/routes/full-layout-routes';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { Auth_ROUTES } from './shared/routes/auth-layout-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'market/auth/login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'full Views' },
    children: Full_ROUTES,
  },
  {
    path: '',
    component: AuthLayoutComponent,
    data: { title: 'auth Views' },
    children: Auth_ROUTES,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
