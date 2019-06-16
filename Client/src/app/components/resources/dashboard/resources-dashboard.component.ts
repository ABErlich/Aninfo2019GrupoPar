import { Component, OnInit } from '@angular/core';

import Resource from 'src/app/models/Resource';

import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resources-dashboard',
  templateUrl: './resources-dashboard.component.html',
  styleUrls: ['./resources-dashboard.component.css']
})
export class ResourcesDashboardComponent implements OnInit {

  resources: Resource[] = [];

  columnsToDisplay = ['recurso', 'proyecto', 'version', 'rol', 'acciones'];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resources = this.resourceService.getResources();
  }

}
