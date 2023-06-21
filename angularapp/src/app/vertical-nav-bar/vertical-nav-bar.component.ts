import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../tickets-service/shared.service';
import { TicketsApiService } from '../tickets-service/tickets-api.service';
import { ResponseTicket } from '../Interfaces/ResponseTicket';

@Component({
  selector: 'app-vertical-nav-bar',
  templateUrl: './vertical-nav-bar.component.html',
  styleUrls: ['./vertical-nav-bar.component.css']
})
export class VerticalNavBarComponent {
  tickets!: Array<ResponseTicket>;
  constructor(private ticketsApiService: TicketsApiService,
    public sharedService: SharedService) { }

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketsApiService.getAllTickets().subscribe({
      next: (resp: any) => {
        this.sharedService.tickets = resp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => { }
    });
  }

  displayTicket(ticket: ResponseTicket) {
    console.log("ticket to be displayed: " + ticket);
    this.sharedService.ticket = ticket;
  }
}

