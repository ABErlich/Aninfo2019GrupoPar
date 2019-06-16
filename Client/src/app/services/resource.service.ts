import { Injectable } from '@angular/core'

import Resource from '../models/Resource';

import { ProjectService } from './project.service';


@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private resources: Resource[];

  constructor(private projectService: ProjectService) {
    const resource1 = new Resource();
    resource1.id = 1;
    resource1.name = 'Juan Develo';
    resource1.project = projectService.getProject('COD1');
    resource1.role = "Desarrollador";

    const resource2 = new Resource();
    resource2.id = 2;
    resource2.name = 'Pedro Desarro';
    resource2.role = "Desarrollador";

    this.resources = [resource1, resource2];
  };

  getResources(): Resource[] {
    return this.resources
  };
}
