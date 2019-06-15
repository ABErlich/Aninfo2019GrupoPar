import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import Task, { TASK_STATE_LIST, TaskState } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/tasks.service';
import { MatOptionSelectionChange } from '@angular/material';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit {

  private tasks: Task[];
  private displayedColumns: string[] = ['name', 'asignee', 'state', 'priority', 'estimatedTime', 'dedicatedTime'];

  private resources: string[] = ['', 'Fernando Soluzzia', 'Felipe Codeo'];
  private priorities: TaskState[] = TASK_STATE_LIST;

  constructor(private route: ActivatedRoute,
              private service: TaskService) { }

  ngOnInit() {
    const id: string = this.getProjectId();
    this.getTasks(id);
  }

  getTasks(id: string): void {
    this.tasks = this.service.getTasksByProject(id);
  }

  getProjectId() : string {
    return this.route.snapshot.paramMap.get('id');
  }

  onAsigneeChange(event: MatOptionSelectionChange, task: Task) : void {
    const newAsignee: string = event.source.value;
    this.service.setTaskAsignee(task.name, task.projectId, newAsignee);
  }

  onStateChange(event: MatOptionSelectionChange, task: Task) : void {
    const newState: TaskState = event.source.value;
    this.service.setTaskState(task.name, task.projectId, newState);
  }
}
