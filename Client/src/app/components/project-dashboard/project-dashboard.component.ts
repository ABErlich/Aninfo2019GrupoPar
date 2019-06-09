
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/ProjectService';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent{

  private projects: any[];

  constructor(private service: ProjectService, private exampleService: ExampleService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {

    var response = "";

    this.exampleService.exampleGet("param").subscribe((res) => {
      response = res;
    })


    this.projects = this.service.getProjects();

  }

}
