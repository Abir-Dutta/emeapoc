import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QualificationComponent } from './qualification.component';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';


@NgModule({
  declarations: [QualificationComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QualificationComponent }]),
    ProfileButtonModule,
  ],
  exports: [
    QualificationComponent
  ]
})
export class QualificationModule { }
