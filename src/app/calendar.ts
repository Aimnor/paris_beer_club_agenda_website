import { Component } from '@angular/core';
import { DayPilot } from '@daypilot/daypilot-lite-angular';
import { ProfessionalsService } from './professionnals-viewer/professionnal.service';

@Component({
    selector: 'app-calendar',
    standalone: false,
    templateUrl: 'calendar.html'
})
export class CalendarApp {
    events: DayPilot.EventData[] = [];

    constructor(private ps: ProfessionalsService) {
    }
    ngOnInit() {
        this.ps.$events.subscribe(value => {
            this.events = value;
        });
        this.ps.fetchData()
    }
}
