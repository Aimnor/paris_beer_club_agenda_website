import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Professional } from './professional.model';
import { DayPilot } from '@daypilot/daypilot-lite-angular';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {
  private professionalsSubject = new BehaviorSubject<Professional[]>([]);
  public $professionals = this.professionalsSubject.asObservable();
  private eventsSubject = new BehaviorSubject<DayPilot.EventData[]>([]);
  public $events = this.eventsSubject.asObservable();

  private apiUrl = 'http://localhost:5000/professionals';
  private datePattern = "yyyy/MM/dd HH:mm";

  constructor(private http: HttpClient) { }

  fetchData() {
    this.http.get<Professional[]>(this.apiUrl).subscribe({
      next: (v) => {
        this.professionalsSubject.next(v);
        this.eventsSubject.next(v.flatMap(p => p.events.flatMap(
          e => <DayPilot.EventData>{
            start: DayPilot.Date.parse(e.date, this.datePattern),
            end: DayPilot.Date.parse(e.date, this.datePattern).addHours(2),
            id: 0,
            text: e.name
          })));
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}