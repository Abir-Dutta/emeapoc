import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



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
    Ng2SearchPipeModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
