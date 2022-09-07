import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./potie/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'car-info',
    loadChildren: () => import('./potie/car-info/car-info.module').then( m => m.CarInfoPageModule)
  },
  {
    path: 'gen-inv',
    loadChildren: () => import('./potie/gen-inv/gen-inv.module').then( m => m.GenInvPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
