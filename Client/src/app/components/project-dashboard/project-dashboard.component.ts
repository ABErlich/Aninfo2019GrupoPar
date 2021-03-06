
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import Risk from 'src/app/models/Risk';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogCancelarProyecto } from './dialogs/dialog-cancelar-proyecto/dialog-cancelar-proyecto.component';
import { DialogFinalizarProyecto } from './dialogs/dialog-finalizar-proyecto/dialog-finalizar-proyecto.component';
import { PROJECT_STATE_FINALIZED, PROJECT_STATE_CANCEL } from 'src/app/models/ProjectState';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent {

  private projects: any[];
  private displayedColumns: string[];

  constructor(private service: ProjectService,
    private exampleService: ExampleService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.displayedColumns = ['riesgos', 'code', 'name', 'currentVersion', 'leader', 'type', 'state', 'dedicatedTime', 'acciones'];
    this.projects = this.service.getProjects();
  }

  estaEnCurso(estadoProjecto: string): Boolean {
    return estadoProjecto != PROJECT_STATE_CANCEL.name && estadoProjecto != PROJECT_STATE_FINALIZED.name ;
  }

  openCancelarDialog(projectCode: string): void {
    const modalRef = this.dialog.open(DialogCancelarProyecto, {
      width: '400px'
    });
    modalRef.componentInstance.projectCode = projectCode;
  }

  openFinalizarDialog(projectCode: string): void {
    const modalRef = this.dialog.open(DialogFinalizarProyecto, {
      width: '600px'
    });
    modalRef.componentInstance.projectCode = projectCode;
  }
}
