import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import Risk from 'src/app/models/Risk';

@Component({
  selector: 'dialog-cancelar-proyecto',
  templateUrl: 'dialog-cancelar-proyecto.html',
})
export class DialogCancelarProyecto {

  @Input() public projectCode;

  constructor(private service: ProjectService) {}

  cancelarProyecto(): void{
    this.service.cancelProject(this.projectCode);
  }

}