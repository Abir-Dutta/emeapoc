import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { OnboardingComponent } from '../onboarding.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {


  previousSearchPath = PATH.SEARCH_SKILL;
  private searchChip = [
    {
      value: 'Primary',
      isSelected: false
    },
    {
      value: 'Primary1',
      isSelected: false
    },
    {
      value: 'Primary2',
      isSelected: false
    },
    {
      value: 'Primary3',
      isSelected: false
    },
    {
      value: 'Primary4',
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
