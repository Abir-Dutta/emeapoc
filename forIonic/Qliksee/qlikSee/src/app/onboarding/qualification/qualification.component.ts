import { Component, OnInit, Host } from '@angular/core';
import { PATH } from 'src/app/constants';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})
export class QualificationComponent implements OnInit {

  previousSearchPath = PATH.SEARCH_SECTOR;
  nextSearchPath = PATH.SEARCH_EXPERIENCE;
  searchText: string;
  searchChip = [
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
  appComponent = null;

  constructor(@Host() appComponent: AppComponent) {
    this.appComponent = appComponent;
   }

  ngOnInit() {}
  navigateSearch(searchPath: string) {
    this.appComponent.navigateSearch(searchPath);
  }

}
