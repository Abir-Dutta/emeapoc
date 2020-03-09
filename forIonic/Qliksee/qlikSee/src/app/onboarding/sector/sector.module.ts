import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SectorComponent } from './sector.component';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [SectorComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SectorComponent }]),
    ProfileButtonModule,
    Ng2SearchPipeModule
  ],
  exports: [
    SectorComponent
  ]
})
export class SectorModule { }
