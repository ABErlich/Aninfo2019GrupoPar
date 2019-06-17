import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import Resource, { Roles } from 'src/app/models/Resource';
import Project from 'src/app/models/Project';

import { ResourceService } from 'src/app/services/resource.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-resource-assignment',
  templateUrl: './resource-assignment.component.html',
  styleUrls: ['./resource-assignment.component.css']
})
export class ResourceAssignmentComponent implements OnInit {

  displayedColumns: string[] = ['select', 'project', 'role', 'hours'];
  dataSource: MatTableDataSource<Project>;
  rowSelection: SelectionModel<Project>;

  projects: Project[];
  resource: Resource;
  selection: number[];

  roles: Roles[] = Object.values(Roles);

  asignForm: FormGroup;

  constructor(
    private resourceService: ResourceService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.selection = [];
    this.asignForm = this.formBuilder.group({
      roleAndHoursForm: this.formBuilder.array([])
    });
   }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResourceById(id);
    this.projects = this.projectService.getProjects();
    this.dataSource = new MatTableDataSource<Project>(this.projects);
    this.rowSelection = new SelectionModel<Project>(true, []);
    this.asignForm = this.formBuilder.group({
      roleAndHoursForm: this.formBuilder.array(
        this.projects.map(() => this.formBuilder.group({
          selected: [false],
          role: [''],
          hours: ['']
        }))
      )
    });
  }

  onSelect(index: number) {
    if(this.selection.includes(index)) {
      this.selection = this.selection.filter(el => el !== index);
    } else {
      this.selection = [...this.selection, index];
    }
  }

  onSubmit() {
    if (this.asignForm.valid) {
      console.log(this.asignForm.value);
      const { roleAndHoursForm } = this.asignForm.value;
      roleAndHoursForm.map((value: any, index: number) => {
        if (value.selected) {
          this.projectService.assignResource(this.projects[index].code, this.resource, value.role, value.hours)
          console.log(this.projects[index].code, this.resource, value.role, value.hours);
        }
      });
    }
  }

  isAllSelected() {
    const numSelected = this.rowSelection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.rowSelection.clear() :
        this.dataSource.data.forEach(row => this.rowSelection.select(row));
  }
}
