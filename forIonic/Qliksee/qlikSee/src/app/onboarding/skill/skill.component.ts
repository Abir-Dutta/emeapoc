import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_EXPERIENCE;
  nextSearchPath = PATH.SEARCH_LOCATION;
  searchText: string;
  searchChip = [
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
  appComponent = null;

  constructor(@Host() appComponent: AppComponent) {
    this.appComponent = appComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.appComponent.navigateSearch(searchPath);
  }


}
