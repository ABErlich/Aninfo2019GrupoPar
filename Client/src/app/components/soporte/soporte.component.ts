import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/Ticket';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  displayedColumns: string[] = ['producto', 'version', 'cliente', 'severidad', 'responsable', 'opciones'];
  dataSource: Ticket[] = null;
  filterDataSource: Ticket[] = null;
  selected = undefined;
  productos = [];

  constructor(private ticketService: TicketService, private clientService: ClientService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var tickets = this.ticketService.getTickets();
    this.dataSource = tickets;
    this.filterDataSource = this.dataSource;
    this.productos = this.removeDuplicates(this.dataSource, "producto");
  }

  public filtrar(producto: String) {
    this.filterDataSource = this.dataSource.filter(function (reg) {
      return reg.producto == producto;
    });
  }

  public borrarFiltro() {
    this.filterDataSource = this.dataSource;
    this.selected = undefined;
  }

  public removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i][prop]);
    }
    return newArray;
  }

  public getClient(code: string) {
    return this.clientService.getById(code)
  }

}
