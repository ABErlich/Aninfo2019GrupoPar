
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/ProjectService';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent{

  displayedColumns: string[] = ['name', 'version', 'client'];
  dataSource: Product[] = null;

  constructor(private productService: ProductService, private exampleService: ExampleService) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var products = this.productService.getProducts();

    this.dataSource = products;

    
    // var response = "";

    // this.exampleService.exampleGet("param").subscribe((res) => {
    //   response = res;
    // })


    // this.projects = this.service.getProjects();

  }

  



}
