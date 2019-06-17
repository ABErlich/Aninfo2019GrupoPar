import { Injectable } from '@angular/core'

import Resource, { Roles } from '../models/Resource';
import Skill, { SkillLevels } from '../models/Skill';

import { ProjectService } from './project.service';


@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private resources: Resource[];

  constructor(private projectService: ProjectService) {
    let id = 1;
    let name = 'Juan Develo';
    let project = projectService.getProject('COD1');
    let role = Roles.DEVELOPER;
    let skills = [
      new Skill('JavaScript', SkillLevels.HIGH),
      new Skill('Python', SkillLevels.LOW),
      new Skill('Inglés', SkillLevels.MID),
    ]
    const resource1 = new Resource(id, name, project, role, skills, 0);

    id = 2;
    name = 'Pedro Desarro';
    skills = [
      new Skill('JavaScript', SkillLevels.MID),
      new Skill('Inglés', SkillLevels.HIGH),
    ]
    const resource2 = new Resource(id, name, null, null, skills);

    id = 3;
    name = 'Manuel Analis';
    skills = [
      new Skill('Portugués', SkillLevels.HIGH)
    ]
    const resource3 = new Resource(id, name, null, null, skills);

    this.resources = [resource1, resource2, resource3];
  };

  getResources(): Resource[] {
    return this.resources
  };

  getResource(id: number): Resource {
    return this.resources.find(res => res.id === id);
  }
}
