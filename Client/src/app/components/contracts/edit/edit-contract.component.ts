import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/Contract';
import { ContractService } from 'src/app/services/contract.service';
import { ProductService } from 'src/app/services/product.service';
import { DateAdapter } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.css']
})
export class EditContractComponent{

  clients: Client[] = [];
  contract: Contract = new Contract();

  constructor(private contractService: ContractService, private clientService: ClientService, public adapter: DateAdapter<Date>, private router: Router, private route: ActivatedRoute) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    // formato de fecha
    this.adapter.setLocale('es');

    // Traigo los clientes disponibles
    this.clients = this.clientService.getClients();

    this.route.queryParams.subscribe(queryParams => {
        var contractId = this.route.snapshot.queryParams["contractId"];

        this.contract = this.contractService.getById(contractId);
    });

  }

  editContract(){
    this.contractService.editContract(this.contract);

    this.router.navigate(['/contratos']);
  }



}
