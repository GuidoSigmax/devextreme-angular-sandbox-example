import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduler-component-example',
  templateUrl: './scheduler-component-example.component.html',
  styleUrls: ['./scheduler-component-example.component.scss']
})
export class SchedulerComponentExampleComponent implements OnInit {

  dataSource: any[] = [];

  currentDate:Date = new Date(Date.now());

  constructor() { }

  ngOnInit() {
  }

}
