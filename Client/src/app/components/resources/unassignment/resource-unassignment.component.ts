import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import Resource, { Assignment } from 'src/app/models/Resource';
import Project from 'src/app/models/Project';

import { ResourceService } from 'src/app/services/resource.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-resource-unassignment',
  templateUrl: './resource-unassignment.component.html',
  styleUrls: ['./resource-unassignment.component.css']
})
export class ResourceUnassignmentComponent implements OnInit {

  columnsToDisplay: string[] = ['code', 'project', 'beginDate', 'endDate', 'role', 'hours', 'state', 'actions'];
  dataSource: MatTableDataSource<Assignment>;

  resource: Resource;


  constructor(
    private resourceService: ResourceService,
    private projectService: ProjectService,
    private route: ActivatedRoute, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResourceById(id);
    this.dataSource = new MatTableDataSource<Assignment>(this.resource.assignments);
  }

  unassign(index: number) {
    const { code } = this.resource.assignments[index].project;
    this.projectService.unassignResource(code, this.resource)
    this.dataSource = new MatTableDataSource<Assignment>(this.resource.assignments);
  }
}
