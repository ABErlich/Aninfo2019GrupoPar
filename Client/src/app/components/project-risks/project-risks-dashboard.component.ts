
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RiskService } from 'src/app/services/risk.service';
import Risk from 'src/app/models/Risk';


@Component({
  selector: 'app-project-risks-dashboard',
  templateUrl: './project-risks-dashboard.component.html',
  styleUrls: ['./project-risks-dashboard.component.css']
})
export class ProjectRisksDashboardComponent {

  private risks: any[];
  private displayedColumns: string[];
  private projectCode: string;

  private MAXIMO_UMBRAL_PERMITIDO: number = 0.5;

  constructor(private service: RiskService,
    private route: ActivatedRoute,
    private exampleService: ExampleService) { }

  ngOnInit() {
    this.displayedColumns = ['alerta', 'motive', 'description', 'impact', 'probability', 'umbral'];
    const id: string = this.getProjectId();
    this.projectCode = id;
    this.MAXIMO_UMBRAL_PERMITIDO = 0.5;
    this.getRisks(id);
  }

  getProjectId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  getRisks(id: string): void {
    this.risks = this.service.getRisksByProject(id);
  }

  superoElUmbral(risk: Risk): boolean {
    return risk.aboveThreshold(this.MAXIMO_UMBRAL_PERMITIDO);
  }

  valorRiesgo(valor: number): string {
    if (valor <= 0.3) return "Bajo"
    else if (valor <= 0.7) return "Medio"
    else return "Alto";
  }

  agregarEstilosSiSuperoElUmbral(risk: Risk): any {
    if (this.superoElUmbral(risk)) {
      return {
        'background-color': '#ff5252',
        'color': 'white',
        'font-weight': 600
      };
    }
    return {}
  }
}
