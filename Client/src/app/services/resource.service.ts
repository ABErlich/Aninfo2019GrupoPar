import { Injectable } from '@angular/core'

import Resource from '../models/Resource';

import { ProjectService } from './project.service';
import Project from '../models/Project';

@Injectable({
    providedIn: 'root',
})
export class ResourceService {
    private resources: Resource[];

    constructor(private projectService: ProjectService) {
        const project: Project = projectService.getProject('COD1');
        this.resources = [
            new Resource(1, 'Juan Develo', project, 'Desarrollador', 10),
            new Resource(2, 'Pedro Desarro', null, 'Desarrollador', 20),
            new Resource(3, 'Felipe Codeo', project, 'Desarrollador', 20),
            new Resource(4, 'Fernando Soluzzia', project, 'Lider de Proyecto', 10)
        ];
    }

    getResources(): Resource[] {
        return this.resources;
    }

    getResourcesByProject(projectId: string): Resource[] {
        return this.resources.filter((r: Resource) => r.project && r.project.code === projectId);
    }

    getResourceById(id: number): Resource {
        return this.resources.find(r => r.id === id);
    }
}
