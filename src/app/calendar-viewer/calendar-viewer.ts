import { Component } from "@angular/core";
import { DayPilot } from "@daypilot/daypilot-lite-angular";
import { ProfessionalsService } from "../professionnals-viewer/professionnal.service";

@Component({
  selector: 'app-calendar-viewer',
  template: `
  <div><daypilot-calendar [config]="config" [events]="events"></daypilot-calendar>></div>`,
  standalone: false
})
export class CalendarViewer {

  events: DayPilot.EventData[] = [];

  constructor(private ps: ProfessionalsService) {
  }
  ngOnInit() {
    this.ps.$events.subscribe(value => {
      this.events = value;
    });
    this.ps.fetchData()
  }

  config: DayPilot.CalendarConfig = {
    viewType: "Week",       // ou "Day" ou "Month"
    startDate: "2025-07-30"
  };
}