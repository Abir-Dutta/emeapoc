import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SectorComponent } from './sector.component';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';


@NgModule({
  declarations: [SectorComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SectorComponent }]),
    ProfileButtonModule,
  ],
  exports: [
    SectorComponent
  ]
})
export class SectorModule { }
