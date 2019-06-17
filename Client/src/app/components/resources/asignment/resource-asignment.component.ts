import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import Resource, { Roles } from 'src/app/models/Resource';
import Project from 'src/app/models/Project';

import { ResourceService } from 'src/app/services/resource.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-resource-asignment',
  templateUrl: './resource-asignment.component.html',
  styleUrls: ['./resource-asignment.component.css']
})
export class ResourceAsignmentComponent implements OnInit {

  projects: Project[];
  resource: Resource;
  selection: string;

  roles: Roles[] = Object.values(Roles);

  asignForm: FormGroup;
  indexSelected: number;

  constructor(
    private resourceService: ResourceService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.asignForm = this.formBuilder.group({
      roleAndHoursForm: this.formBuilder.array([])
    });
   }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResource(id);
    this.projects = this.projectService.getProjects();
    this.asignForm = this.formBuilder.group({
      roleAndHoursForm: this.formBuilder.array(
        this.projects.map(x => this.formBuilder.group({
          role: ['', Validators.required],
          hours: ['', Validators.required]
        }))
      )
    });
  }

  toggleProjectSelection(code: string){
    this.selection = code !== this.selection ? code : null;
  }

  onSubmit(form) {
    console.log((<FormArray>this.asignForm.get('roleAndHoursForm')).at(this.indexSelected).value);
  }

}
