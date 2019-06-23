import { Injectable } from '@angular/core';

import Task, { TaskState } from '../models/Task';
import Project from '../models/Project';
import { ProjectService } from './project.service';
import {PROJECT_STATE_IN_PROGRESS} from '../models/ProjectState';
import { ResourceService } from './resource.service';
import Resource, { Assignment } from '../models/Resource';

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    constructor(private projectService: ProjectService,
                private resourceService: ResourceService) { }

    getTasksByProject(projectId: string) : Task[] {
        const project: Project = this.projectService.getProject(projectId);
        return project.tasks.slice(0); // devuelvo un clon
    }

    addTask(task: Task): void {
        const project: Project = this.projectService.getProject(task.projectId);
        project.addTask(task);
    }

    setTaskAsignee(taskName: string, projectCode: string, newAsigneeId: number): any {
        const project: Project = this.projectService.getProject(projectCode);
        const task: Task = project.tasks.find(t => t.name === taskName);

        if (newAsigneeId === null || newAsigneeId === 0) {
            task.asignee = null; // TODO: falta verificar que la tarea esté completada, etc. etc. etc.
            return;
        }

        if (task.asignee && task.asignee.id === newAsigneeId) {
            throw new Error(`El recurso ${newAsigneeId} ya está asignado a la tarea ${taskName}`);
        }

        const newAsigneeTasks: Task[] = project.tasks.filter(t => t.asignee && t.asignee.id === newAsigneeId);
        const alreadyAllocatedHours = newAsigneeTasks.map(t => t.estimatedTime)
                                                     .reduce((a, b) => a + b, 0);

        const newAsignee: Resource = this.resourceService.getResourceById(newAsigneeId);

        const assignment: Assignment = newAsignee.assignments.find(a => a.project.code === projectCode);
        if ((alreadyAllocatedHours + task.estimatedTime) > assignment.hours) {
            throw new Error(`Asignar la tarea ${task.name} al recurso ${newAsignee.name} sobrepasaría ` +
                            `las horas del recurso dedicadas al proyecto`);
        }

        project.state = PROJECT_STATE_IN_PROGRESS;
        task.asignee = newAsignee;
    }

    setTaskState(taskName: string, projectId: string, newState: TaskState): any {
        const project: Project = this.projectService.getProject(projectId);
        const task: Task = project.tasks.find(t => t.name === taskName);
        task.state = newState;
    }
}