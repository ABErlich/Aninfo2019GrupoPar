import { Injectable } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

import Risk from '../models/Risk';

@Injectable({
    providedIn: 'root',
})
export class RiskService {

    constructor(private service: ProjectService) {

    }

    getRisksByProject(id: string): Risk[] {
        return this.service.getProject(id).risks;
    }

    saveRisk(projectCode: string, risk: Risk): void {
        risk.umbral = risk.impact * risk.probability; 
        this.service.getProject(projectCode).risks.push(risk);
    }

}