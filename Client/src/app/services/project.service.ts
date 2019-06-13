import { Injectable } from '@angular/core';

import Project from '../models/Project';
import Task, { TaskState, TaskPriority } from '../models/Task';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {

    private projects: Project[];

    constructor() {
        this.projects = [];

        const proyecto = new Project();

        proyecto.code = 'COD1';
        proyecto.name = 'PSA';
        proyecto.leader = 'Fernando Soluzzia';
        proyecto.beginDate = new Date();
        proyecto.endDate = new Date();
        proyecto.description = 'PSA Proyecto Basse';
        proyecto.currentVersion = 'Alpha';

        proyecto.tasks = [
            new Task('Tarea 1', 'Fernando Soluzzia', TaskState.COMPLETED, TaskPriority.HIGH, 5, 5),
            new Task('Tarea 2', 'Fernando Soluzzia', TaskState.DEVELOPMENT, TaskPriority.MEDIUM, 2, 1),
            new Task('Tarea 3', 'Felipe Codeo', TaskState.PENDING, TaskPriority.LOW, 1, 0)
        ];

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