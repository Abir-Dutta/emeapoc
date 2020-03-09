import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SkillComponent } from './skill.component';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [SkillComponent
    ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SkillComponent }]),
    ProfileButtonModule,
    Ng2SearchPipeModule
  ],
  exports: [
    SkillComponent
      ]
})
export class SkillModule { }
