import { Injectable } from '@angular/core';

import Task from '../models/Task';
import Project from '../models/Project';
import { ProjectService } from './project.service';

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    constructor(private projectService: ProjectService) { }

    getTasksByProject(projectId: string) : Task[] {
        const project: Project = this.projectService.getProject(projectId);
        return project.tasks;
    }

    addTask(task: Task): void {
        const project: Project = this.projectService.getProject(task.projectId);
        project.addTask(task);
    }

    setTaskAsignee(taskName: string, projectId: string, newAsignee: string): any {
        const project: Project = this.projectService.getProject(projectId);
        const task: Task = project.tasks.find(t => t.name === taskName);
        task.asignee = newAsignee;
    }
}