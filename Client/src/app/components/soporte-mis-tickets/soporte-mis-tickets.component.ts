import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-soporte-mis-tickets',
  templateUrl: './soporte-mis-tickets.component.html',
  styleUrls: ['./soporte-mis-tickets.component.css']
})

export class SoporteMisTicketsComponent implements OnInit {

  displayedColumns: string[] = ['numeroTicket', 'cliente', 'producto', 'severidad', 'tipo', 'asunto', 'fechaAlta', 'estado', 'opciones'];
  dataSource: Ticket[] = null;
  filterDataSource: Ticket[] = null;
  selected = undefined;
  responsables = [];

  constructor(private ticketService: TicketService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var tickets = this.ticketService.getTickets();
    this.dataSource = tickets;
    this.responsables = this.removeDuplicates(this.dataSource, "responsable");
  }

  public filtrar(responsable: String) {
    this.filterDataSource = this.dataSource.filter(function (registro) {
      return registro.responsable == responsable;
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

}
