import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery-page/galery/galery.component';

const routes: Routes = [
    { path: '', component: GaleryComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class GaleryRoutingModule { }
