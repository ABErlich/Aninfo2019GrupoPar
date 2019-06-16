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

  displayedColumns: string[] = ['nombre', 'asignado', 'estado'];
  ticket: Ticket;
  estados = ['Abierto', 'En progreso', 'Cerrado', 'Escalado a desarrollo', 'Escalado a implementacion', 'A la espera del cliente'];
  inEstado: string;
  responsables: string[];
  inResponsable: string;
  departamentos = ['Desarrollo', 'Implementacion'];
  inDepartamento: string;
  severidades = ['Baja', 'Media', 'Alta'];
  inSeveridad: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.getTicket();
    this.responsables = this.ticketService.getResponsables();
    this.inEstado = this.ticket.estado;
    this.inResponsable = this.ticket.responsable;
    this.inDepartamento = this.ticket.departamento;
    this.inSeveridad = this.ticket.severidad;
  }

  goBack(): void {
    this.location.back();
  }

  getTicket() {
    var id = +this.route.snapshot.paramMap.get('numeroTicket');
    this.ticket = this.ticketService.getTicket(id);
  }

  onClick() {
    this.ticket.departamento = this.inDepartamento;
    this.ticket.severidad = this.inSeveridad;
    this.ticket.estado = this.inEstado;
    this.ticket.responsable = this.inResponsable;
  }

}
