import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/Contract';
import { ContractService } from 'src/app/services/contract.service';
import { ProductService } from 'src/app/services/product.service';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';
import { ContractsConfigurations } from 'src/app/models/ContractsConfiguration';


@Component({
  selector: 'app-contract-configuration',
  templateUrl: './contracts-configuration.component.html',
  styleUrls: ['./contracts-configuration.component.css']
})
export class ContractConfigurationComponent{

    configuration: ContractsConfigurations = null;

    constructor(private contractService: ContractService, private clientService: ClientService, public adapter: DateAdapter<Date>, private router: Router) {
    }

    ngOnInit() {
        this.configuration = this.contractService.getConfiguration();
    }

    editConfiguration() {
        this.contractService.editConfiguration(this.configuration);
        this.router.navigate(['/contratos']);
    }


}
