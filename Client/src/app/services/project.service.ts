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
        riesgo.umbral = riesgo.impact * riesgo.probability;

        proyecto.risks.push(riesgo);

        var riesgo = new Risk();
        riesgo.id = 2;
        riesgo.motive = "Tarifa inestable dada la condicion del dolar actual";
        riesgo.description = "Tarifa inestable";
        riesgo.impact = 0.9
        riesgo.probability = 0.7;
        riesgo.umbral = riesgo.impact * riesgo.probability;
        proyecto.type = PROJECT_TYPE_DEV;
    
        proyecto.risks.push(riesgo);

        
        this.projects.push(proyecto);
        
        var proyecto2 = new Project();

        proyecto2.code = 'CUO';
        proyecto2.name = 'CUOMA';
        proyecto2.leader = 'Santiago de Cuoma';
        proyecto2.beginDate = new Date();
        proyecto2.endDate = new Date();
        proyecto2.description = 'Proyecto para la gestion de operaciones de la Consultora CUOMA';
        proyecto2.currentVersion = 'Alpha';
        proyecto2.type = PROJECT_TYPE_DEV;

        this.projects.push(proyecto2);
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