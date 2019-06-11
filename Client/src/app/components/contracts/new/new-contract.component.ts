import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/models/Contract';
import { ContractService } from 'src/app/services/contract.service';
import { ProductService } from 'src/app/services/product.service';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent{

  contract: Contract = new Contract();

  constructor(private contractService: ContractService, private productService: ProductService, public adapter: DateAdapter<Date>, private router: Router,) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    // formato de fecha
    this.adapter.setLocale('es');
  }

  addContract(){
    this.contractService.addContract(this.contract);

    this.router.navigate(['/contratos']);
  }



}
