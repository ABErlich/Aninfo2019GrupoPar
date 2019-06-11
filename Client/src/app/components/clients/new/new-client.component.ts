import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/Contract';
import { ContractService } from 'src/app/services/contract.service';
import { ProductService } from 'src/app/services/product.service';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent{

  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
  }

  addClient(){
    this.clientService.addClient(this.client);

    this.router.navigate(['/clientes']);
  }



}
