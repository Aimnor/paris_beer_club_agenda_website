import { Component } from '@angular/core';
import { Professional } from './professional.model';
import { ProfessionalsService } from './professionnal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-professionnals-viewer',
  imports: [],
  templateUrl: './professionnals-viewer.html',
  styleUrl: './professionnals-viewer.css'
})

export class ProfessionnalsViewer {
  professionals: Professional[] = [];

  constructor(private ps: ProfessionalsService) {
  }
  ngOnInit() {
    const professionals$: Observable<Professional[]> = this.ps.getUsers();
    professionals$.subscribe({
      next: (v) => this.professionals = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  findSubscribed(professionals: Professional[]): Professional[] {
    return professionals.filter(p => p.subscribed).sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  findNotSubscribed(professionals: Professional[]): Professional[] {
    return professionals.filter(p => !p.subscribed).sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
