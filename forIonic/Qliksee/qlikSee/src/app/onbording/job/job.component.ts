import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {

  constructor() { }
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
  ]
  ngOnInit() {}

}
