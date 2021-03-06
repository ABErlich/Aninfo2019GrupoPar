import { Injectable } from '@angular/core';

import Project from '../models/Project';
import Risk from '../models/Risk';
import Task, { TaskState, TaskPriority } from '../models/Task';
import { PROJECT_TYPE_DEV } from '../models/ProjectType';
import { PROJECT_STATE_INITIAL, PROJECT_STATE_IN_PROGRESS, PROJECT_STATE_CANCEL,  PROJECT_STATE_FINALIZED } from '../models/ProjectState';
import Resource, { Roles } from '../models/Resource';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {

    private projects: Project[];

    constructor() {
        this.projects = [];

        const proyecto = new Project();

        const placeholderDev1 = new Resource(4, 'Fernando Soluzzia', [{project: proyecto, role:Roles.PROJECT_LEADER, hours: 10 }], 10);
        const placeholderDev2 = new Resource(3, 'Felipe Codeo', [{project: proyecto, role: Roles.DEVELOPER, hours: 20}], 20);

        proyecto.code = 'COD1';
        proyecto.name = 'PSA';
        proyecto.leader = placeholderDev1;
        proyecto.beginDate = new Date("06/21/2019");
        proyecto.endDate = new Date("10/05/2019");
        proyecto.description = 'PSA Proyecto Basse';
        proyecto.currentVersion = 'Alpha';
        proyecto.state = PROJECT_STATE_IN_PROGRESS;
        proyecto.type = PROJECT_TYPE_DEV;

        proyecto.tasks = [
            new Task('Tarea 1', placeholderDev1, TaskState.COMPLETED, TaskPriority.HIGH, 5, 5, proyecto.code),
            new Task('Tarea 2', placeholderDev1, TaskState.DEVELOPMENT, TaskPriority.MEDIUM, 2, 1, proyecto.code),
            new Task('Tarea 3', placeholderDev2, TaskState.PENDING, TaskPriority.LOW, 1, 0, proyecto.code),
            new Task('Tarea 4', null, TaskState.PENDING, TaskPriority.MEDIUM, 5, 0, proyecto.code)
        ];

        let riesgo = new Risk();
        riesgo.id = 1;
        riesgo.motive = "Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros";
        riesgo.description = "Baja disponibilidad de recursos";
        riesgo.impact = 0.7
        riesgo.probability = 0.4;

        proyecto.risks.push(riesgo);

        riesgo = new Risk();
        riesgo.id = 2;
        riesgo.motive = "Tarifa inestable dada la condicion del dolar actual";
        riesgo.description = "Tarifa inestable";
        riesgo.impact = 0.9
        riesgo.probability = 0.7;


        proyecto.risks.push(riesgo);

        this.projects.push(proyecto);

        const proyecto2 = new Project();

        proyecto2.code = 'CUO';
        proyecto2.name = 'CUOMA';
        proyecto2.leader = placeholderDev2;
        proyecto2.beginDate = new Date("03/15/2019");
        proyecto2.endDate = new Date("07/15/2019");
        proyecto2.description = 'Proyecto para la gestion de operaciones de la Consultora CUOMA';
        proyecto2.currentVersion = 'Alpha';
        proyecto2.state = PROJECT_STATE_INITIAL;
        proyecto2.type = PROJECT_TYPE_DEV;

        this.projects.push(proyecto2);
    }

    getProjects(): Project[] {
        return this.projects;
    }


    saveProject(project: Project): void {
        this.projects.push(project);
        if (project.leader) {
            this.assignResource(project.code, project.leader, Roles.PROJECT_LEADER, 10);
        }
    }

    getProject(id: string): Project {
        const results: Project[] = this.projects.filter(p => p.code === id);
        return results.length ? results[0] : null;
    }

    cancelProject(id: string): void {
        const results: Project[] = this.projects.filter(p => p.code === id);
        results[0].state = PROJECT_STATE_CANCEL;
    }

    finalizeProject(id: string): Boolean {
        const results: Project[] = this.projects.filter(p => p.code === id);
        var project = results[0];
        var sinTareasPendientes = true;
        project.tasks.forEach(function(task,index){
            if (task.state != "Completado"){
                sinTareasPendientes = false;
            }
        });
        if (sinTareasPendientes){
            project.state = PROJECT_STATE_FINALIZED;
            return true;
        }
        return false;
    }

    assignResource(id: string, resource: Resource, role: Roles, hours: number) {
        const project = this.projects.find(p => p.code === id);
        if(!project.resources.find(r => r.id === resource.id)) {
            project.resources.push(resource);
            resource.assignments.push({ project, role, hours });
        }
    }

    unassignResource(id: string, resource: Resource) {
        const project = this.projects.find(p => p.code === id);
        const resourceIndex = project.resources.findIndex(r => r.id === resource.id);
        if (resourceIndex) {
            project.resources.splice(resourceIndex, 1);
            const projectIndex = resource.assignments.findIndex(a => a.project.code === project.code);
            resource.assignments.splice(projectIndex,1);
        }
    }

    getProjectsByResourceId(id: number): Project[] {
        return this.projects.filter(proj => proj.resources.find(res => res.id === id));
    }

}
