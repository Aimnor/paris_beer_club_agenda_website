import { Component, Input } from "@angular/core";
import { DayPilot } from "@daypilot/daypilot-lite-angular";

@Component({
  selector: 'app-calendar-viewer',
  template: `<daypilot-calendar [config]="config" [events]="events"></daypilot-calendar>>`,
  standalone: false
})
export class CalendarViewer {

  @Input() events: DayPilot.EventData[] = [];

  config: DayPilot.CalendarConfig = {
    viewType: "Week",       // ou "Day" ou "Month"
    startDate: "2025-07-30"
  };
}