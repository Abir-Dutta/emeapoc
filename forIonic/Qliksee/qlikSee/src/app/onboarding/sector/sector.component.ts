import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { OnboardingComponent } from '../onboarding.component';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss'],
})
export class SectorComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_JOB;
  nextSearchPath = PATH.SEARCH_QUALIFICATION;

private searchChip = [
    {
      value: 'Retial',
      isSelected: false
    },
    {
      value: 'Travel',
      isSelected: false
    },
    {
      value: 'Pension',
      isSelected: false
    },
    {
      value: 'NHS',
      isSelected: false
    },
    {
      value: 'Banking',
      isSelected: false
    },
    {
      value: 'Primary5',
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
