import { Component, Input } from '@angular/core';
import { Professional } from './professional.model';
import { ProfessionalsService } from './professionnal.service';

@Component({
  selector: 'app-professionnals-viewer',
  templateUrl: './professionnals-viewer.html',
  styleUrl: './professionnals-viewer.css',
  standalone: false
})

export class ProfessionnalsViewer {
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

