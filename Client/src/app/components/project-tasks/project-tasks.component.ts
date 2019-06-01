import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/ProjectService';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit {

  private project: Project;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProjectService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getProject(id);
  }

  getProject(id: string): void {
    this.project = this.service.getProject(id);
  }

  // TODO: remove when add task functionality is done
  addTask() {
    const task: Task = new Task();
    task.name = 'TASK';
    this.project.tasks.push(task);
  }
}
