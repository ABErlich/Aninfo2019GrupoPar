import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import Task, { TASK_STATE_LIST, TaskState } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/tasks.service';
import { MatOptionSelectionChange, MatDialog, MatTableDataSource } from '@angular/material';
import { MessageDialogComponent } from '../../common/message-dialog/message-dialog.component';
import { ResourceService } from 'src/app/services/resource.service';
import Resource from 'src/app/models/Resource';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit {

  private static EMPTY_RESOURCE = new Resource(0, '-', null, null, null);

  private tasks: Task[];
  private displayedColumns: string[] = ['name', 'asignee', 'state', 'priority', 'estimatedTime', 'dedicatedTime'];

  private resources: Resource[];
  private priorities: TaskState[] = TASK_STATE_LIST;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private resourceService: ResourceService,
              public dialog: MatDialog) { }

  ngOnInit() {
    const id: string = this.getProjectId();
    this.getTasks(id);
    this.getResources(id);
  }

  getTasks(id: string): void {
    const tasks: Task[] = this.taskService.getTasksByProject(id);
    this.tasks = tasks;
  }
  refreshGrid(): void {
    console.log('refresh');
    this.getTasks(this.getProjectId());
  }

  getResources(id: string): void {
    const resources: Resource[] = this.resourceService.getResourcesByProject(id);
    resources.unshift(ProjectTasksComponent.EMPTY_RESOURCE);
    this.resources = resources;
  }
  compareResources(a: any, b: any) {
    // fuerzo a que sean numeros
    a = parseInt(a.toString());
    b = parseInt(b.toString());
    if (a && b) {
      return a === b;
    }
    return false;
  }

  getProjectId() : string {
    return this.route.snapshot.paramMap.get('id');
  }

  onAsigneeChange(event: MatOptionSelectionChange, task: Task): void {
    const newAsigneeId: number = event.source.value;

    try {
      this.taskService.setTaskAsignee(task.name, task.projectId, newAsigneeId);
    } catch (error) {
      this.showDialog('Error al asignar', error.message, (() => {
        this.refreshGrid();
      }).bind(this));
    }
  }

  showDialog(title: string, message: string, afterClose?: (() => void)) {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: { title, message }
    });

    if (afterClose) {
      dialogRef.afterClosed().subscribe(afterClose);
    }
  }

  onStateChange(event: MatOptionSelectionChange, task: Task) : void {
    const newState: TaskState = event.source.value;
    this.taskService.setTaskState(task.name, task.projectId, newState);
  }
}
