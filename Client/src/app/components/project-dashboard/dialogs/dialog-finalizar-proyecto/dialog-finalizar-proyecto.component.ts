import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProjectService } from 'src/app/services/project.service';
import Risk from 'src/app/models/Risk';

@Component({
  selector: 'dialog-finalizar-proyecto',
  templateUrl: 'dialog-finalizar-proyecto.html',
})
export class DialogFinalizarProyecto {
  private mostrarMensajeError: Boolean;
  @Input() public projectCode;

  constructor(private service: ProjectService,  public dialogRef: MatDialogRef<DialogFinalizarProyecto>) {
    this.mostrarMensajeError = false;
   }

  finalizarProyecto(): void {
    if (this.service.finalizeProject(this.projectCode)){
      this.dialogRef.close();
    } else {
      this.mostrarMensajeError = true;
    }
  }
}