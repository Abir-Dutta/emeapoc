import { Component, OnInit, EventEmitter, Output, Host } from '@angular/core';
import {PATH} from '../../constants';
import { OnboardingComponent } from '../onboarding.component';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  nextSearchPath = PATH.SEARCH_SECTOR;
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
