import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-box',
  templateUrl: './ticket-box.component.html',
  styleUrls: ['./ticket-box.component.css']
})
export class TicketBoxComponent {
  items: { checked: boolean }[] = [];
  @Input() ticket: any;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 49; i++) {
      this.items.push({ checked: this.ticket.includes(i) });
    }
  }
}
