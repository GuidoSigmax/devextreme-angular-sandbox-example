export interface IAppointment {
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  recurrenceRule: string;
  text: string;
  description: string;
  disabled: boolean;
}
