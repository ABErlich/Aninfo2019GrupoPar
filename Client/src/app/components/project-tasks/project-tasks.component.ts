import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-project-tasks',
  templateUrl: './project-tasks.component.html',
  styleUrls: ['./project-tasks.component.css']
})
export class ProjectTasksComponent implements OnInit {

  private project: Project;
  private tasks: Task[];
  private displayedColumns: string[] = ['name', 'asignee', 'state', 'priority', 'estimatedTime', 'dedicatedTime'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProjectService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getProject(id);
  }

  getProject(id: string): void {
    this.project = this.service.getProject(id);
    this.tasks = this.project.tasks;
  }
}
