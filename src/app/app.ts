import { Component, signal } from '@angular/core';
import { ProfessionalsService } from './professionnals-viewer/professionnal.service';
import { Professional } from './professionnals-viewer/professional.model';
import { Observable } from 'rxjs';
import { DayPilot } from '@daypilot/daypilot-lite-angular';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('beer_agenda_website');
  professionals: Professional[] = [];
  datePattern: string = "yyyy/MM/dd HH:mm"

  constructor(private ps: ProfessionalsService) {
  }
  ngOnInit() {
    const professionals$: Observable<Professional[]> = this.ps.getProfessionnals();
    professionals$.subscribe({
      next: (v) => this.professionals = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  findSubscribed(): Professional[] {
    return this.professionals.filter(p => p.subscribed).sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  findNotSubscribed(): Professional[] {
    return this.professionals.filter(p => !p.subscribed).sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  getEvents(): DayPilot.EventData[] {
    return this.professionals.flatMap(p => p.events.flatMap(
      e => <DayPilot.EventData>{
        start: DayPilot.Date.parse(e.date, this.datePattern),
        end: DayPilot.Date.parse(e.date, this.datePattern).addHours(2),
        id: 0,
        text: e.name
      }));
  }
}
