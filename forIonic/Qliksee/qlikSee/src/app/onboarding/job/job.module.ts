import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './job.component';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';


@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: JobComponent }]),
    ProfileButtonModule,
  ],
  exports: [
    JobComponent
  ]
})
export class JobModule { }
