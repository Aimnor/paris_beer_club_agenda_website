import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfessionnalsViewer } from "./professionnals-viewer/professionnals-viewer";
import { CalendarComponent } from './professionnals-viewer/calendar.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beer_agenda_website');
}
