import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfessionnalsViewer } from "./professionnals-viewer/professionnals-viewer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfessionnalsViewer, ProfessionnalsViewer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('beer_agenda_website');
}
