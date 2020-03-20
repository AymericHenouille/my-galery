import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryPageComponent } from './galery/galery-page/galery-page.component';

const routes: Routes = [
  { path: 'galery', component: GaleryPageComponent, loadChildren: () => import('./galery/galery.module').then(m => m.GaleryModule) },
  { path: '', redirectTo: 'galery', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PagesModule { }
