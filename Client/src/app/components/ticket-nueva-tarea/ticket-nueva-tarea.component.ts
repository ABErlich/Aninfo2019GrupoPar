import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import Task, { TaskPriority, TASK_PRIORITY_LIST, TaskState } from 'src/app/models/Task';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ticket-nueva-tarea',
  templateUrl: './ticket-nueva-tarea.component.html',
  styleUrls: ['./ticket-nueva-tarea.component.css']
})
export class TicketNuevaTareaComponent implements OnInit {

  ticket: Ticket;
  task: Task = new Task;
  private priorities: TaskPriority[] = TASK_PRIORITY_LIST;


  constructor(
    private location: Location,
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  getTicket() {
    var id = +this.route.snapshot.paramMap.get('numeroTicket');
    this.ticket = this.ticketService.getTicket(id);
  }

  addTask() {
    this.getTicket();
    this.task.state = TaskState.PENDING;
    this.task.dedicatedTime = 0;
    this.task.estimatedTime = 0;
    this.ticket.tareas.push(this.task);
    this.location.back();
  }
}
