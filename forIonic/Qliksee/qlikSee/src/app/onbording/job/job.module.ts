import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './job.component';


@NgModule({
  declarations: [JobComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: JobComponent }])
  ],
  exports: [
    JobComponent
  ]
})
export class JobModule { }
