import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInUpRoutingModule } from './sign-in-up-routing.module';
import {SignInUpComponent} from './sign-in-up.component';

import {SignInModule} from './sign-in/sign-in.module';
import {SignUpModule} from './sign-up/sign-up.module';

@NgModule({
  declarations: [SignInUpComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SignInUpRoutingModule,
    SignInModule,
    SignUpModule
  ],
})
export class SignInUpModule { }
