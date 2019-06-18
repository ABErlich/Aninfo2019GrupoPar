import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import ProjectType, { PROJECT_TYPE_LIST } from 'src/app/models/ProjectType';
import { PROJECT_STATE_INITIAL } from 'src/app/models/ProjectState';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  submitResultMessage: string;
  projectForm: FormGroup;

  projectTypes: ProjectType[] = PROJECT_TYPE_LIST;

  constructor(private service: ProjectService,
              private router: Router,
              public adapter: DateAdapter<Date>) { }

  ngOnInit() {
    this.adapter.setLocale('es');
    this.projectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      leader: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      beginDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.projectForm.valid) {
      const project: Project = new Project();

      project.code = this.projectForm.value.code;
      project.name = this.projectForm.value.name;
      project.leader = this.projectForm.value.leader;
      project.beginDate = this.projectForm.value.beginDate;
      project.endDate = this.projectForm.value.endDate;
      project.description = this.projectForm.value.description;
      project.currentVersion = this.projectForm.value.currentVersion;
      project.type = this.projectForm.value.type;
      project.state = PROJECT_STATE_INITIAL;

      this.service.saveProject(project);

      this.router.navigate(['proyectos']);
    } else {
      this.submitResultMessage = 'Faltan campos obligatorios.';
    }
  }

}
