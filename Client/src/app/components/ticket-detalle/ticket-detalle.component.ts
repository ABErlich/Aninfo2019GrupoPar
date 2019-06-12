import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-ticket-detalle',
  templateUrl: './ticket-detalle.component.html',
  styleUrls: ['./ticket-detalle.component.css']
})
export class TicketDetalleComponent implements OnInit {

  ticket: Ticket;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.getTicket();
  }

  goBack(): void {
    this.location.back();
  }

  getTicket() {
    var id = +this.route.snapshot.paramMap.get('numeroTicket');
    this.ticket = this.ticketService.getTicket(id);
  }

}
