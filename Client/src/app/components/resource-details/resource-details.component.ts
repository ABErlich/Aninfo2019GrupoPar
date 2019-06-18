import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import Resource from 'src/app/models/Resource';

import { ResourceService } from 'src/app/services/resource.service';

import { AddResourceSkillDialog } from './add-resource-skill-dialog/add-resource-skill-dialog.component';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  columnsToDisplay = ['code', 'projects', 'beginDate', 'endDate', 'state'];

  resource: Resource;

  constructor(private route: ActivatedRoute , private resourceService: ResourceService, public dialog: MatDialog) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResourceById(id);
  }

  openDialog(): void {
    this.dialog.open(AddResourceSkillDialog, { data: { resourceId: this.resource.id } });
  }
}
