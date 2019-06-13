
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { RiskService } from 'src/app/services/risk.service';


@Component({
  selector: 'app-project-risks-dashboard',
  templateUrl: './project-risks-dashboard.component.html',
  styleUrls: ['./project-risks-dashboard.component.css']
})
export class ProjectRisksDashboardComponent {

  private risks: any[];
  private displayedColumns: string[];

  constructor(private service: RiskService,
    private exampleService: ExampleService) { }

  ngOnInit() {
    this.displayedColumns = ['project_code', 'motive', 'impact', 'probability', 'acciones'];
    this.risks = this.service.getRisks();
  }

}
