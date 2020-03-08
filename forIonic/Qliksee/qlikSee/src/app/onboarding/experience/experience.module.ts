import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';



@NgModule({
  declarations: [
    ExperienceComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ExperienceComponent }]),
    ProfileButtonModule,
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
