import { Injectable } from '@angular/core';

import Risk from '../models/Risk';

@Injectable({
    providedIn: 'root',
})
export class RiskService {
    private risks: Risk[];

    constructor() {

        this.risks = [];
        var riesgo = new Risk();
        riesgo.id = 1;
        riesgo.motive = "Baja disponibilidad de recursos debido a la reduccion de personal por problemas financieros";
        riesgo.description = "Baja disponibilidad de recursos";
        riesgo.impact = 0.7
        riesgo.probability = 0.4;
        riesgo.project_code = "COD1";

        this.risks.push(riesgo);


        var riesgo = new Risk();
        riesgo.id = 2;
        riesgo.motive = "Tarifa inestable dada la condicion del dolar actual";
        riesgo.description = "Tarifa inestable";
        riesgo.impact = 0.9
        riesgo.probability = 0.7;
        riesgo.project_code = "COD1";

        this.risks.push(riesgo);
    }

    getRisks(): Risk[] {
        return this.risks;
    }

    saveRisk(risk: Risk): void {
        this.risks.push(risk);
    }

    getRisk(id: string): Risk {
        const results: Risk[] = this.risks.filter(p => p.id === id);
        return results.length ? results[0] : null;
    }
}