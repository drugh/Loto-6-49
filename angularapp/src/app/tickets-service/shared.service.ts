import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponseTicket } from '../Interfaces/ResponseTicket';
import { TicketsApiService } from './tickets-api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public ticket!: ResponseTicket;
  public tickets!: Array<ResponseTicket>;

  constructor(private ticketsApiService: TicketsApiService) { }
}
