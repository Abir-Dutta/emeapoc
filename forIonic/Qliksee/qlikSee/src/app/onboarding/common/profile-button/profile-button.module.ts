import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileButtonComponent } from './profile-button.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ProfileButtonComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ProfileButtonComponent
  ]
})
export class ProfileButtonModule { }
