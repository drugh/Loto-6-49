import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketBoxComponent } from './ticket-box/ticket-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VerticalNavBarComponent } from './vertical-nav-bar/vertical-nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketBoxComponent,
    NavBarComponent,
    VerticalNavBarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
