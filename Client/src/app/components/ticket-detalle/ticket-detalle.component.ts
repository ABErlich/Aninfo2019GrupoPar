import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import Task, { TaskState, TASK_STATE_LIST, TaskPriority, TASK_PRIORITY_LIST } from 'src/app/models/Task';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/tasks.service';
import { ResourceService } from 'src/app/services/resource.service';
import Resource from 'src/app/models/Resource';

@Component({
  selector: 'app-ticket-detalle',
  templateUrl: './ticket-detalle.component.html',
  styleUrls: ['./ticket-detalle.component.css']
})
export class TicketDetalleComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'asignado', 'estado', 'prioridad', 'hsEstimadas', 'hsDedicadas'];
  ticket: Ticket;
  estados = ['Abierto', 'En progreso', 'Cerrado', 'Escalado a desarrollo', 'Escalado a implementacion', 'A la espera del cliente'];
  inEstado: string;
  responsables: string[];
  inResponsable: string;
  departamentos = ['Desarrollo', 'Implementacion'];
  inDepartamento: string;
  severidades = ['Baja', 'Media', 'Alta'];
  inSeveridad: string;
  resources: Resource[] = null;
  states: TaskState[] = TASK_STATE_LIST;
  priorities: TaskPriority[] = TASK_PRIORITY_LIST;
  projects: Project[];


  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private resourceService: ResourceService,
  ) { }

  ngOnInit() {
    this.getTicket();
    this.responsables = this.ticketService.getResponsables();
    this.inEstado = this.ticket.estado;
    this.inResponsable = this.ticket.responsable;
    this.inDepartamento = this.ticket.departamento;
    this.inSeveridad = this.ticket.severidad;
    this.projects = this.projectService.getProjects();
    this.resources = this.resourceService.getResources()
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

  agregarTareaAProyecto(element: Task) {
    this.taskService.addTask(element);
  }

}