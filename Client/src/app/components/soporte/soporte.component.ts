import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  displayedColumns: string[] = ['producto', 'version', 'cliente', 'severidad', 'responsable'];
  dataSource: Ticket[] = null;

  constructor(private ticketService: TicketService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var tickets = this.ticketService.getTickets();

    this.dataSource = tickets;
  }

}
