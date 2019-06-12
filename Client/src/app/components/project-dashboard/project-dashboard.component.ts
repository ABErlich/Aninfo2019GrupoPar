
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent{

  private projects: any[];
  private displayedColumns: string[];

  constructor(private service: ProjectService, 
              private exampleService: ExampleService) { }

  ngOnInit() {
    this.displayedColumns = ['code', 'name', 'leader', 'currentVersion', 'acciones'];
      this.projects = this.service.getProjects();
  }

}
