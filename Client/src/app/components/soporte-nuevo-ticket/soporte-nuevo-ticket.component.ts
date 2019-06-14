import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-soporte-nuevo-ticket',
  templateUrl: './soporte-nuevo-ticket.component.html',
  styleUrls: ['./soporte-nuevo-ticket.component.css']
})
export class SoporteNuevoTicketComponent implements OnInit {

  nuevoTicket: Ticket;
  clientes = undefined;

  constructor(
    private location: Location,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientes = this.clientService.getClients().map(c => c.name)
  }

  goBack(): void {
    this.location.back();
  }

}
