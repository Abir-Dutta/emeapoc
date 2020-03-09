import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss'],
})
export class SectorComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_JOB;
  nextSearchPath = PATH.SEARCH_QUALIFICATION;
  searchText: string;
  searchChip = [
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
  appComponent = null;

  constructor(@Host() appComponent: AppComponent) {
    this.appComponent = appComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.appComponent.navigateSearch(searchPath);
  }

}
