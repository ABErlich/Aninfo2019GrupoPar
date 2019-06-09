
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Contract } from 'src/app/models/Contract';
import { ContractService } from 'src/app/services/contract.service';


@Component({
  selector: 'app-contracts-dashboard',
  templateUrl: './contracts-dashboard.component.html',
  styleUrls: ['./contracts-dashboard.component.css']
})
export class ContractDashboardComponent{

  displayedColumns: string[] = ['client', 'startDate', 'endDate'];
  dataSource: Contract[] = null;

  constructor(private contractService: ContractService, private exampleService: ExampleService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var contracts = this.contractService.getContracts();

    this.dataSource = contracts;

    
    // var response = "";

    // this.exampleService.exampleGet("param").subscribe((res) => {
    //   response = res;
    // })


    // this.projects = this.service.getProjects();

  }

  



}
