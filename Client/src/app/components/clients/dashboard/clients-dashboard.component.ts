
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Contract } from 'src/app/models/Contract';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.css']
})
export class ClientDashboardComponent{

  displayedColumns: string[] = ['name', 'address', 'phoneNumbers', 'email'];
  dataSource: Client[] = null;

  constructor(private clientService: ClientService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var clients = this.clientService.getClients();

    this.dataSource = clients;
  }

  



}
