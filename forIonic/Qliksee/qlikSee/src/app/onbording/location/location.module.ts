import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationComponent } from './location.component';


@NgModule({
  declarations: [LocationComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LocationComponent }])
  ],
  exports: [
    LocationComponent
  ]
})
export class LocationModule { }
