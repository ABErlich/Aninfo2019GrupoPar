import { Component, OnInit } from '@angular/core';
import Project from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  private project: Project;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProjectService) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.getProject(id);
  }

  getProject(id: string): void {
    this.project = this.service.getProject(id);
  }

}
