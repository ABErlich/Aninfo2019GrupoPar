import { Injectable } from '@angular/core';

import Project from '../models/Project';
import Risk from '../models/Risk';
import Task, { TaskState, TaskPriority } from '../models/Task';
import { PROJECT_TYPE_DEV } from '../models/ProjectType';

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
            new Task('Tarea 1', 'Fernando Soluzzia', TaskState.COMPLETED, TaskPriority.HIGH, 5, 5, proyecto.code),
            new Task('Tarea 2', 'Fernando Soluzzia', TaskState.DEVELOPMENT, TaskPriority.MEDIUM, 2, 1, proyecto.code),
            new Task('Tarea 3', 'Felipe Codeo', TaskState.PENDING, TaskPriority.LOW, 1, 0, proyecto.code),
            new Task('Tarea 4', null, TaskState.PENDING, TaskPriority.MEDIUM, 5, 0, proyecto.code)
        ];

        
        var riesgo = new Risk();
        riesgo.id = 1;
        riesgo.motive = "Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros";
        riesgo.description = "Baja disponibilidad de recursos";
        riesgo.impact = 0.7
        riesgo.probability = 0.4;

        proyecto.risks.push(riesgo);

        var riesgo = new Risk();
        riesgo.id = 2;
        riesgo.motive = "Tarifa inestable dada la condicion del dolar actual";
        riesgo.description = "Tarifa inestable";
        riesgo.impact = 0.9
        riesgo.probability = 0.7;
    
        proyecto.risks.push(riesgo);

        proyecto.type = PROJECT_TYPE_DEV;

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