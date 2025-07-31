import { Component, signal } from '@angular/core';
import { ProfessionalsService } from './professionnals-viewer/professionnal.service';
import { Professional } from './professionnals-viewer/professional.model';
import { DayPilot } from '@daypilot/daypilot-lite-angular';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
  <router-outlet />
  `
})
export class App {
  protected readonly title = signal('beer_agenda_website');
  professionals: Professional[] = [];
  datePattern: string = "yyyy/MM/dd HH:mm"
  events: DayPilot.EventData[] = [];

  constructor(private ps: ProfessionalsService) {
  }
  ngOnInit() {
    this.ps.$professionals.subscribe(value => {
      this.professionals = value;
    });
    this.ps.$events.subscribe(value => {
      this.events = value;
    });
    this.ps.fetchData()
  }
}
