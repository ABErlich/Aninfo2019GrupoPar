
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/ProjectService';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent{

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
