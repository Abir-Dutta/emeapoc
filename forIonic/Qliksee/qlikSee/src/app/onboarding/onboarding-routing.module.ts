import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';


const routes: Routes = [
  {
    path: 'search',
    component: OnboardingComponent,
    children: [
      {
        path: 'job',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./job/job.module').then(m => m.JobModule)
          }
        ]
      },
      {
        path: 'experience',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./experience/experience.module').then(m => m.ExperienceModule)
          }
        ]
      }
      ,
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./location/location.module').then(m => m.LocationModule)
          }
        ]
      }
      ,
      {
        path: 'qualification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./qualification/qualification.module').then(m => m.QualificationModule)
          }
        ]
      }
      ,
      {
        path: 'sector',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./sector/sector.module').then(m => m.SectorModule)
          }
        ]
      }
      ,
      {
        path: 'skill',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./skill/skill.module').then(m => m.SkillModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
