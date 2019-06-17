import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Task, { TASK_PRIORITY_LIST, TaskPriority, TaskState } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  private projectId: string;
  private task: Task = new Task();
  taskForm: FormGroup;
  private priorities: TaskPriority[] = TASK_PRIORITY_LIST;
  submitResultMessage: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.taskForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      estimatedTime: new FormControl('', [Validators.required]),
      dedicatedTime: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  addTask() {
    if (this.taskForm.valid) {

      this.task.name = this.taskForm.value.name;
      this.task.estimatedTime = this.taskForm.value.estimatedTime;
      this.task.dedicatedTime = this.taskForm.value.dedicatedTime;
      this.task.priority = this.taskForm.value.priority;
      this.task.description = this.taskForm.value.description;
      this.task.projectId = this.projectId;
      this.task.state = TaskState.PENDING;
      this.taskService.addTask(this.task);

      this.router.navigate(['/proyecto', this.projectId, 'tareas']);
    } else {
      this.submitResultMessage = 'Faltan campos obligatorios.';
    }
  }
}
