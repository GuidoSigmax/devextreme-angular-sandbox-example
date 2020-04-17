import { Component, OnInit } from '@angular/core';
import {IAppointment} from './IAppointment';

@Component({
  selector: 'app-scheduler-component-example',
  templateUrl: './scheduler-component-example.component.html',
  styleUrls: ['./scheduler-component-example.component.scss']
})
export class SchedulerComponentExampleComponent implements OnInit {

  dataSource: any[] = [];

  currentDate:Date = new Date(Date.now());

  hourInMs = 1000 * 60 * 60;

  constructor() { 
    let appointment1:IAppointment = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + this.hourInMs),
      text: "Appointment1",
      allDay:false,
      description: "",
      recurrenceRule: null,
      disabled: false
    };

    let appointment2:IAppointment = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + this.hourInMs),
      text: "Appointment2",
      allDay:false,
      description: "",
      recurrenceRule: null,
      disabled: false
    };

    let appointment3:IAppointment = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + this.hourInMs),
      text: "Appointment3",
      allDay:false,
      description: "",
      recurrenceRule: null,
      disabled: false
    };

    let appointment4:IAppointment = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + this.hourInMs),
      text: "Appointment4",
      allDay:false,
      description: "",
      recurrenceRule: null,
      disabled: false
    };

    let appointment5:IAppointment = {
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + this.hourInMs),
      text: "Appointment5",
      allDay:false,
      description: "",
      recurrenceRule: null,
      disabled: true
    };

    this.dataSource.push(appointment1);
    this.dataSource.push(appointment2);
    this.dataSource.push(appointment3);
    this.dataSource.push(appointment4);
    this.dataSource.push(appointment5);
  }

  onAppointmentFormOpening(e){
    if(e.form){

      e.form.itemOption("text",
      {
        validationRules: [
          {
            type: "required",
            message: "Field is required"
          }
        ]
      });

      e.form.itemOption("startDate",
      {
        validationRules: [
          {
            type: "required",
            message: "Field is required"
          },
          {
            type: "async",
            validationCallback: this.asyncValidation,
            message: "Could not resolve promise"
          }
        ]
      });

      e.form.itemOption("endDate",
      {
        validationRules: [
          {
            type: "required",
            message: "Field is required"
          },
          {
            type: "async",
            validationCallback: this.asyncValidation,
            message: "Could not resolve promise"
          }
        ]
      });
    }
  }

  asyncValidation(e): Promise<any>{
    console.log("validation called");
    return new Promise((resolve,reject)=>{
      setTimeout(() =>{
        reject();
      },3000);
    });
  }

  ngOnInit() {
  }

}
