import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import Task from 'src/app/models/Task';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit {

  private tasks: Task[];
  private displayedColumns: string[] = ['name', 'asignee', 'state', 'priority', 'estimatedTime', 'dedicatedTime'];

  constructor(private route: ActivatedRoute,
              private service: TaskService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getTasks(id);
  }

  getTasks(id: string): void {
    this.tasks = this.service.getTasksByProject(id);
  }
}
