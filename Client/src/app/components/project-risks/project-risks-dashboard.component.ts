
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RiskService } from 'src/app/services/risk.service';


@Component({
  selector: 'app-project-risks-dashboard',
  templateUrl: './project-risks-dashboard.component.html',
  styleUrls: ['./project-risks-dashboard.component.css']
})
export class ProjectRisksDashboardComponent {

  private risks: any[];
  private displayedColumns: string[];
  private projectCode: string;

  constructor(private service: RiskService,
    private route: ActivatedRoute,
    private exampleService: ExampleService) { }

  ngOnInit() {
    this.displayedColumns = ['motive', 'description','impact', 'probability', 'umbral'];
    const id: string = this.getProjectId();
    this.projectCode = id;
    this.getRisks(id);
  }

  getProjectId() : string {
    return this.route.snapshot.paramMap.get('id');
  }

  getRisks(id: string): void {
    this.risks = this.service.getRisksByProject(id);
  }

  superoElUmbral(umbral: number): Object {
    if ( umbral > 0.5  ){
        return {
          'background-color': '#ff5252',
          'color': 'white',
          'font-weight' : 600
      };
    }
    return {}
}
}
