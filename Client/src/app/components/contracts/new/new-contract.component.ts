import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/Contract';
import { ContractService } from 'src/app/services/contract.service';
import { ProductService } from 'src/app/services/product.service';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent{

  clients: Client[] = [];
  contract: Contract = new Contract({});

  constructor(private contractService: ContractService, private clientService: ClientService, public adapter: DateAdapter<Date>, private router: Router) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    // formato de fecha
    this.adapter.setLocale('es');

    // Traigo los clientes disponibles
    this.clients = this.clientService.getClients();
  }

  addContract(){
    this.contractService.addContract(this.contract);

    this.router.navigate(['/contratos']);
  }



}
