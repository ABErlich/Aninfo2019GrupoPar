import { Injectable } from '@angular/core';

import Project from '../models/Project';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[];

    constructor() {
        this.projects = [];
        var proyecto = new Project();
        proyecto.code = "COD1";
        proyecto.name = "PSA";
        proyecto.leader = "Fernando Soluzzia";
        proyecto.beginDate = new Date();
        proyecto.endDate = new Date();
        proyecto.description = "PSA Proyecto Basse";
        proyecto.currentVersion = "Alpha";
        this.projects.push(proyecto);
    }

    getProjects(): Project[] {
        return this.projects;
    }


    saveProject(project: Project): void {
        this.projects.push(project);
    }

    getProject(id: string): Project {
        const results: Project[] = this.projects.filter(p => p.code === id);
        return results.length ? results[0] : null;
    }
}