import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SignupComponent, LoginComponent
  ],
  imports: [ReactiveFormsModule, AngularFireAuthModule, SharedModule, AuthRoutingModule]
})
export class AuthModule {}
