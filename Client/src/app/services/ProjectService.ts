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
        return this.projects;
    }

    saveProject(project: Project): void {
        this.projects.push(project);
    }

    getProject(id: string): Project {
        const results: Project[] = this.projects.filter(p => p.id === id);
        return results.length ? results[0] : null;
    }
}