import { Injectable } from '@angular/core';

import Project from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
    private projects: Project[];

    constructor() { 
        this.projects = [];
    }

    getProjects(): Project[] {
        // TODO: fetch from api
        this.mockearProyectos();
        return this.projects;
    }

    mockearProyectos(): void {
        var proyectosPSA = new Project();
        proyectosPSA.code = "COD1";
        proyectosPSA.name = "PSA";
        proyectosPSA.leader = "Fernando Soluzzia";
        proyectosPSA.beginDate = new Date();
        proyectosPSA.endDate = new Date();
        proyectosPSA.description = "PSA Proyecto Basse";
        proyectosPSA.currentVersion = "Alpha";
  
        this.projects.push(proyectosPSA);      
    }

    saveProject(project: Project): void {
        this.projects.push(project);
    }

    getProject(id: string): Project {
        const results: Project[] = this.projects.filter(p => p.code === id);
        return results.length ? results[0] : null;
    }
}