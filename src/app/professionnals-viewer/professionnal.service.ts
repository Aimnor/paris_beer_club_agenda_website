import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professional } from './professional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  private apiUrl = 'http://localhost:5000/professionals'; // your API

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.apiUrl);
  }
}