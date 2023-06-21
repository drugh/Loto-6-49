import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsApiService {
  private baseApiUrl: string = "https://localhost:7241/";

  constructor(private http: HttpClient) { }

  generateTickets(numberOfTickets: number, superzahl: boolean): Observable<any[]> {
    return this.http.post<any[]>(this.baseApiUrl + "Tickets",
      { numberOfTickets, superzahl });
  }

  getAllTickets() {
    return this.http.get<any[]>(this.baseApiUrl + "Tickets");
  }
}
