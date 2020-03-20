import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

import { WelcomeComponent } from './auth-page/welcome/welcome.component';
import { SigninComponent } from './auth-page/signin/signin.component';
import { SignupComponent } from './auth-page/signup/signup.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [AuthPageComponent, WelcomeComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
