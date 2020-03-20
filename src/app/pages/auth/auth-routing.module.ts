import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './auth-page/welcome/welcome.component';
import { SigninComponent } from './auth-page/signin/signin.component';
import { SignupComponent } from './auth-page/signup/signup.component';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule { }
