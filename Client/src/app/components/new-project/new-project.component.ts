import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  submitResultMessage: string;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      leader: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitResultMessage = 'Project created';
    } else {
      this.submitResultMessage = 'Missing required fields';
    }
  }

}
