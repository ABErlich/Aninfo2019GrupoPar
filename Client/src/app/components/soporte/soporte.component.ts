import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  displayedColumns: string[] = ['producto', 'version', 'cliente', 'severidad', 'responsable', 'op'];
  dataSource: Ticket[] = null;
  filterDataSource: Ticket[] = null;
  selected = undefined;

  constructor(private ticketService: TicketService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var tickets = this.ticketService.getTickets();
    this.dataSource = tickets;
    this.filterDataSource = this.dataSource;
  }

  public filtrar(producto: String) {
    this.filterDataSource = this.dataSource.filter(function (reg) {
      return reg.producto == producto;
    });
  }

  public borrarFiltro(){
    this.filterDataSource = this.dataSource;
  }

  

}
