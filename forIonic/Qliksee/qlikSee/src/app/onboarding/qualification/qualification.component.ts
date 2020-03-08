import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { OnboardingComponent } from '../onboarding.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_SECTOR;
  nextSearchPath = PATH.SEARCH_EXPERIENCE;
  private searchChip = [
    {
      value: 'Prince 2',
      isSelected: false
    },
    {
      value: 'IIBA',
      isSelected: false
    },
    {
      value: 'LEAN 6 SIGMA',
      isSelected: false
    },
    {
      value: 'BCS',
      isSelected: false
    },
    {
      value: 'ITIL',
      isSelected: false
    },
    {
      value: 'Computing BsC',
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
