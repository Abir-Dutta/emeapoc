import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { OnboardingComponent } from '../onboarding.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_EXPERIENCE;
  nextSearchPath = PATH.SEARCH_LOCATION;
  private searchChip = [
    {
      value: 'Digital marketing',
      isSelected: false
    },
    {
      value: 'UX/UI',
      isSelected: false
    },
    {
      value: 'Email Marketing',
      isSelected: false
    },
    {
      value: 'SSRS',
      isSelected: false
    },
    {
      value: 'CRM',
      isSelected: false
    },
    {
      value: 'Digital transformation',
      isSelected: false
    }
  ];
  onboarding = null;

  constructor(@Host() onboardingComponent: OnboardingComponent) {
    this.onboarding = onboardingComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.onboarding.navigateSearch(searchPath);
  }

}
