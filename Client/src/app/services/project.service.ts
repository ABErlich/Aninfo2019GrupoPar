import { Injectable } from '@angular/core';

import Project from '../models/Project';
import Risk from '../models/Risk';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[];

    constructor() {
        this.projects = [];
        var proyecto = new Project();
        proyecto.code = "COD1";
        proyecto.name = "PSA Solutions";
        proyecto.leader = "Fernando Soluzzia";
        proyecto.beginDate = new Date();
        proyecto.endDate = new Date();
        proyecto.description = "PSA Proyecto en el cual llevaremos la gestion de las operaciones";
        proyecto.currentVersion = "1.1-RC5";
        

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

        this.projects.push(proyecto);
        var proyecto = new Project();
        proyecto.code = "COD2";
        proyecto.name = "Cromosol";
        proyecto.leader = "Francisco Rodriguez";
        proyecto.beginDate = new Date();
        proyecto.endDate = new Date();
        proyecto.description = "Proyecto para llevar a cabo la gestion de las operaciones en la empresa de autopartes CROMOSOL";
        proyecto.currentVersion = "1.0";
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