
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import Risk from 'src/app/models/Risk';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent {

  private projects: any[];
  private displayedColumns: string[];

  constructor(private service: ProjectService,
    private exampleService: ExampleService) {
  }

  ngOnInit() {
    this.displayedColumns = ['riesgos', 'code', 'name', 'currentVersion', 'leader', 'type', 'state' , 'acciones'];
    this.projects = this.service.getProjects();
  }

  tieneRiesgosQueSuperanUmbral(riesgos: Risk[]): Boolean {
    var superoUmbral = false;
    riesgos.forEach(function(riesgo,index){
        if (riesgo.umbral > 0.5){
          superoUmbral = true;
          return;
        }
    });
    return superoUmbral;
  }

  cantidadDeRiesgosQueSuperanUmbral(riesgos: Risk[]): number {
    var numeroRiesgos = 0;
    riesgos.forEach(function(riesgo,index){
        if (riesgo.umbral > 0.5){
          numeroRiesgos ++;
          return;
        }
    });
    return numeroRiesgos;
  }
}
