import { Injectable } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

import Risk from '../models/Risk';

@Injectable({
    providedIn: 'root',
})
export class RiskService {
    private risks: Risk[];

    constructor(private service: ProjectService) {

    }

    getRisksByProject(id: string): Risk[] {
        return this.service.getProject(id).risks;
    }

    saveRisk(risk: Risk): void {
        this.risks.push(risk);
    }

    getRisk(id: string): Risk {
        const results: Risk[] = this.risks.filter(p => p.id === id);
        return results.length ? results[0] : null;
    }
}