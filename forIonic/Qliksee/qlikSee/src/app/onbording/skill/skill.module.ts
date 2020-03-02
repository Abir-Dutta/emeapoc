import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SkillComponent } from './skill.component';


@NgModule({
  declarations: [SkillComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SkillComponent }])
  ],
  exports: [
    SkillComponent
  ]
})
export class SkillModule { }
