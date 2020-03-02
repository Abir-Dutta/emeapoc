import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SectorComponent } from './sector.component';


@NgModule({
  declarations: [SectorComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SectorComponent }])
  ],
  exports: [
    SectorComponent
  ]
})
export class SectorModule { }
