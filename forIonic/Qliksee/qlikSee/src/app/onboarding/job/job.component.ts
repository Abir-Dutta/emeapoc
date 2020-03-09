import { Component, OnInit, EventEmitter, Output, Host } from '@angular/core';
import {PATH} from '../../constants';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  nextSearchPath = PATH.SEARCH_SECTOR;
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
