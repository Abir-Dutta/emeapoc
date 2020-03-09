import { Component, OnInit, Input, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_QUALIFICATION;
  searchText: string;
  nextSearchPath = PATH.SEARCH_SKILL;
  private searchChip = [
    {
      value: 'Under a year',
      isSelected: false
    },
    {
      value: '1-2 years',
      isSelected: false
    },
    {
      value: '3-6 years',
      isSelected: false
    },
    {
      value: '7-9 years',
      isSelected: false
    },
    {
      value: '10-12 years',
      isSelected: false
    },
    {
      value: '15+ years',
      isSelected: false
    }
  ];

  appComponent = null;

  constructor(@Host() appComponent: AppComponent) {
    this.appComponent = appComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.appComponent.navigateSearch(searchPath);
  }

}
