import { Injectable } from '@angular/core'

import Resource, { Roles } from '../models/Resource';
import Skill, { SkillLevels } from '../models/Skill';
import Project from '../models/Project';

import { ProjectService } from './project.service';

@Injectable({
    providedIn: 'root',
})
export class ResourceService {
    private resources: Resource[];

    constructor(private projectService: ProjectService) {
        const project: Project = projectService.getProject('COD1');
        this.resources = [
            new Resource(1, 'Juan Develo', [{project, role: Roles.DEVELOPER, hours: 20}], 20, [new Skill('Python', SkillLevels.HIGH)]),
            new Resource(2, 'Pedro Desarro', [], 20, []),
            new Resource(3, 'Felipe Codeo', [{project, role: Roles.DEVELOPER, hours: 20}], 20, []),
            new Resource(4, 'Fernando Soluzzia', [{project, role: Roles.PROJECT_LEADER, hours: 20}], 20, [new Skill('Ingles', SkillLevels.HIGH)]),
            new Resource(5, 'Hector Analis', [{project, role: Roles.ANALYST, hours: 20}], 20, [new Skill('Ingles', SkillLevels.MID)])
        ];
    }

    getResources(): Resource[] {
        return this.resources;
    }

    getResourcesByProject(projectId: string): Resource[] {
        return this.resources.filter(
            (r: Resource) => r.assignments.find(
                assignment => assignment.project && assignment.project.code === projectId)
        );
    }

    getResourceById(id: number): Resource {
        return this.resources.find(r => r.id === id);
    }
}
