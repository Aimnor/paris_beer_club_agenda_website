import { Component, Input } from '@angular/core';
import { Professional } from './professional.model';

@Component({
  selector: 'app-professionnal-viewer',
  styleUrl: './professionnal-viewer.css',
  templateUrl: './professionnal-viewer.html',
  standalone: false
})

export class ProfessionnalViewer {
  @Input() professional: Professional = new Professional();
  isOpen: boolean = false;

  isSectionOpen = false;

  toggleSection() {
    this.isSectionOpen = !this.isSectionOpen;
  }

  ngOnInit() {
    this.professional.display_name = this.capitalizeFirstLetter(this.professional.display_name);
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
