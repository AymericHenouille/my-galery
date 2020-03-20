import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryPageComponent } from './galery/galery-page/galery-page.component';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';

const routes: Routes = [
  { path: 'galery', component: GaleryPageComponent, loadChildren: () => import('./galery/galery.module').then(m => m.GaleryModule) },
  { path: 'login', component: AuthPageComponent, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PagesModule { }
