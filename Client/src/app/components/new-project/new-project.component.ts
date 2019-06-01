import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/ProjectService';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  submitResultMessage: string;
  projectForm: FormGroup;

  constructor(private service: ProjectService) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      leader: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.projectForm.valid) {
      let project: Project = new Project();

      project.id = this.projectForm.value.id;
      project.name = this.projectForm.value.name;
      project.leader = this.projectForm.value.leader;
      project.description = this.projectForm.value.description;
      project.currentVersion = this.projectForm.value.currentVersion;

      this.service.saveProject(project);

      this.submitResultMessage = 'Project created';
    } else {
      this.submitResultMessage = 'Missing required fields';
    }
  }

}
