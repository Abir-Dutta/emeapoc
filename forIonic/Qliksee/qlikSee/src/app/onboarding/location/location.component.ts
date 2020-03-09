import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {


  previousSearchPath = PATH.SEARCH_SKILL;
  searchText: string;
  searchChip = [
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
  appComponent = null;

  constructor(@Host() appComponent: AppComponent) {
    this.appComponent = appComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.appComponent.navigateSearch(searchPath);
  }

}
