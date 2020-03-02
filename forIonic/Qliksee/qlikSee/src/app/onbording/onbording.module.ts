import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnbordingRoutingModule } from './onbording-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExperienceModule } from './experience/experience.module';
import { QualificationModule } from './qualification/qualification.module';
import { SectorModule } from './sector/sector.module';
import { SkillModule } from './skill/skill.module';
import { JobModule } from './job/job.module';
import { LocationModule } from './location/location.module';
import { OnbordingComponent } from './onbording.component';
// import { JobComponent } from './job/job.component';
// import { LocationComponent } from './location/location.component';
// import { QualificationComponent } from './qualification/qualification.component';
// import { SectorComponent } from './sector/sector.component';
// import { SkillComponent } from './skill/skill.component';
// import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    OnbordingComponent
  ],
  imports: [
    CommonModule,
    OnbordingRoutingModule,
    IonicModule,
    FormsModule,
    ExperienceModule,
    JobModule,
    LocationModule,
    QualificationModule,
    SectorModule,
    SkillModule
  ]
})
export class OnbordingModule { }
