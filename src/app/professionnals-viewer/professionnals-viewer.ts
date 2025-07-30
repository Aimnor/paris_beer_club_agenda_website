import { Component, Input } from '@angular/core';
import { Professional } from './professional.model';

@Component({
  selector: 'app-professionnals-viewer',
  templateUrl: './professionnals-viewer.html',
  styleUrl: './professionnals-viewer.css',
  standalone: false
})

export class ProfessionnalsViewer {
  @Input() professionals: Professional[] = [];
}

