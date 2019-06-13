import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Task, { TaskPriority, TaskState } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  private projectId: string;
  private task: Task = new Task();
  private priorities: TaskPriority[] = [TaskPriority.LOW, TaskPriority.MEDIUM, TaskPriority.HIGH];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
  }

  addTask() {
    this.task.projectId = this.projectId;
    this.task.state = TaskState.PENDING;
    this.taskService.addTask(this.task);

    this.router.navigate(['/proyecto', this.projectId, 'tareas']);
  }
}
