import { Component } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ResponseTicket } from '../Interfaces/ResponseTicket';
import { SharedService } from '../tickets-service/shared.service';
import { TicketsApiService } from '../tickets-service/tickets-api.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  ticketBoxes: any = this.sharedService.ticket?.tickets;
  numberOfTickets: number = 0;
  superzahl: boolean = false;
  generatedSuperzahl: any = this.sharedService.ticket?.superzahl;

  constructor(private ticketsApiService: TicketsApiService,
    public sharedService: SharedService) { }


  ngOnInit() {
    
  }

  generateTickets() {
    this.ticketsApiService.generateTickets(this.numberOfTickets, this.superzahl).subscribe({
      next: (resp: any) => {
        this.ticketBoxes = resp.tickets;
        this.generatedSuperzahl = resp.superzahl;
        this.sharedService.ticket = resp;
        this.sharedService.tickets.push(resp);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => { }
    });
  }
}
