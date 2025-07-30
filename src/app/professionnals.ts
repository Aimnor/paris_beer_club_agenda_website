import { Component, signal } from '@angular/core';
import { ProfessionalsService } from './professionnals-viewer/professionnal.service';
import { Professional } from './professionnals-viewer/professional.model';

@Component({
    selector: 'app-professionals',
    standalone: false,
    templateUrl: 'professionnals.html'
})
export class ProfessionalsApp {
    protected readonly title = signal('beer_agenda_website');
    professionals: Professional[] = [];

    constructor(private ps: ProfessionalsService) {
    }
    ngOnInit() {
        this.ps.$professionals.subscribe(value => {
            this.professionals = value;
        });
        this.ps.fetchData()
    }
}