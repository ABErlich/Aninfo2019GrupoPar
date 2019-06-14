import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';
import { Ticket } from 'src/app/models/Ticket';
import { ProductService } from 'src/app/services/product.service';
import { Client } from 'src/app/models/Client';
import { Product } from 'src/app/models/Product';
import { TicketService } from 'src/app/services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soporte-nuevo-ticket',
  templateUrl: './soporte-nuevo-ticket.component.html',
  styleUrls: ['./soporte-nuevo-ticket.component.css']
})
export class SoporteNuevoTicketComponent implements OnInit {

  nuevoTicket: Ticket;
  clientes: string[] = null;
  products: string[] = null;
  responsables: string[] = null;

  constructor(
    private location: Location,
    private clientService: ClientService,
    private productService: ProductService,
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nuevoTicket = new Ticket();
    this.clientes = this.clientService.getClients().map(c => c.name);
    this.products = this.productService.getProducts().map(p => p.name + " " + p.version);
    this.responsables = Array.from(new Set(this.ticketService.getTickets().map(t => t.responsable)));
    
  }

  goBack(): void {
    this.location.back();
  }

  addTicket() {

    this.nuevoTicket.fechaAlta = new Date();

    this.ticketService.addTicket(this.nuevoTicket);
    this.router.navigate(['/soporte/mistickets']);
  }

}
