import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RiskService } from 'src/app/services/risk.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import Risk from 'src/app/models/Risk';
import Project from 'src/app/models/Project';

@Component({
  selector: 'app-project-new-risk',
  templateUrl: './new-risk.component.html',
  styleUrls: ['./new-risk.component.css']
})
export class NewRiskComponent {

  submitResultMessage: string;
  riskForm: FormGroup;
  projectCode: string;

  constructor(private service: RiskService,
              private router: ActivatedRoute,
              private redireccionRouter: Router) { }


  ngOnInit() {
    this.riskForm = new FormGroup({
      motive: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      impact: new FormControl('', [Validators.required]),
      probability: new FormControl('', [Validators.required])
    });
    this.projectCode = this.router.snapshot.paramMap.get('id');
  }

  submit() {
    if (this.riskForm.valid) {

      const risk: Risk = new Risk();

      risk.motive = this.riskForm.value.motive;
      risk.description = this.riskForm.value.description;
      risk.impact = this.riskForm.value.impact;
      risk.probability = this.riskForm.value.probability;
      
      this.service.saveRisk(this.projectCode, risk);

      var redireccion = 'proyecto/' + this.projectCode + '/riesgos'
      this.redireccionRouter.navigate([redireccion]);

    } else {
      this.submitResultMessage = 'Faltan campos obligatorios.';
    }
  }

}
