import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/ProjectService';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  private projects: any[];

  constructor(private service: ProjectService) {
  }

  ngOnInit() {
    this.projects = this.service.getProjects();
  }

}
