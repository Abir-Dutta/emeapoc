import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationComponent } from './location.component';
import { ProfileButtonModule } from '../common/profile-button/profile-button.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [LocationComponent
    ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LocationComponent }]),
    ProfileButtonModule,
    Ng2SearchPipeModule
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule { }
