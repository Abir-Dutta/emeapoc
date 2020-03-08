import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExperienceModule } from './experience/experience.module';
import { QualificationModule } from './qualification/qualification.module';
import { SectorModule } from './sector/sector.module';
import { SkillModule } from './skill/skill.module';
import { JobModule } from './job/job.module';
import { LocationModule } from './location/location.module';
import { OnboardingComponent } from './onboarding.component';

@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    IonicModule,
    FormsModule,
    ExperienceModule,
    JobModule,
    LocationModule,
    QualificationModule,
    SectorModule,
    SkillModule,
  ],
  exports: []
})
export class OnboardingModule { }
