import { Component, OnInit } from '@angular/core';


export interface PersonElement {
  id: number;
  name: string;
  rol: string;
  assignment: string;
}

const ELEMENT_DATA: PersonElement[] = [
  {id: 1, name: 'Juan Perez', rol: 'Team lead', assignment: 'BI'},
  {id: 2, name: 'Pablo Gonzalez', rol: 'Ssr. Dev.', assignment: 'CRM'},
  {id: 3, name: 'Gonzalo Fernandez', rol: 'Jr. Dev.', assignment: 'ERP'},
];


@Component({
  selector: 'app-teams-dashboard',
  templateUrl: './teams-dashboard.component.html',
  styleUrls: ['./teams-dashboard.component.css']
})
export class TeamsDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'rol', 'assignment'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
