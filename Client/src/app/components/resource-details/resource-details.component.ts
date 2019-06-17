import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import Resource from 'src/app/models/Resource';

import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  resource: Resource;

  constructor(private route: ActivatedRoute , private resourceService: ResourceService) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResource(id);
  }
}
