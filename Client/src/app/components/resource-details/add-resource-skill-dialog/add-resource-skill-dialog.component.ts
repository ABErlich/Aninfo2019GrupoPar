import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

import Skill, { SkillLevels } from '../../../models/Skill';

import { ResourceService } from 'src/app/services/resource.service';

@Component({
    selector: 'app-add-resource-skill-dialog',
    templateUrl: './add-resource-skill-dialog.component.html',
    styleUrls: ['./add-resource-skill-dialog.component.css']
})
export class AddResourceSkillDialog {

    newSkillForm: FormGroup;
    skillLevels: Skill[] = Object.values(SkillLevels);

    constructor(
        public dialogRef: MatDialogRef<AddResourceSkillDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private resourceService: ResourceService) {
            this.newSkillForm = new FormGroup({
                name: new FormControl(''),
                level: new FormControl(''),
                description: new FormControl('')
            });

    }

    onSubmit(){
        const { valid, value } = this.newSkillForm;
        if (valid) {
            this.resourceService.addSkillToResource(this.data.resourceId, value);
            this.dialogRef.close();
        }
    }
}