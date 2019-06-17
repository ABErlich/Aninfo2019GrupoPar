import { Injectable } from '@angular/core'

import Resource, { Roles } from '../models/Resource';
import Skill, { SkillLevels } from '../models/Skill';

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
            new Resource(1, 'Juan Develo', project, Roles.DEVELOPER, 10, [new Skill('Python', SkillLevels.HIGH)]),
            new Resource(2, 'Pedro Desarro', null, Roles.DEVELOPER, 20, []),
            new Resource(3, 'Felipe Codeo', project, Roles.DEVELOPER, 20, []),
            new Resource(4, 'Fernando Soluzzia', project, Roles.PROJECT_LEADER, 10, [new Skill('Ingles', SkillLevels.HIGH)]),
            new Resource(5, 'Hector Analis', project, Roles.ANALYST, 10, [new Skill('Ingles', SkillLevels.MID)])
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
