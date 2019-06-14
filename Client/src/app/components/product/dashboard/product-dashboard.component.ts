
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/Client';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent{

  displayedColumns: string[] = ['name', 'version', 'client', 'detail'];
  prodFilter: string = null;
  clientFilter: string = null;

  productNames: string[] = null;
  clients: Client[] = null;
  dataSource: Product[] = null;

  products: Product[] = null;

  constructor(private productService: ProductService, private clientService: ClientService, private exampleService: ExampleService, private router: Router) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {

    this.products = this.productService.getProducts();

    this.dataSource = this.products;
    this.productNames = Array.from(new Set(this.products.map(p => p.name)));
    this.clients = this.clientService.getClients();

  }

  viewDetails(product: Product){
    this.router.navigate(['/detalle-producto'], { queryParams: { productId: product.id } });
  }

  filter(){

    var result = this.products;

    if(this.prodFilter){
      result = result.filter(d => d.name == this.prodFilter);
    }
    
    if(this.clientFilter){
      result = result.filter(d => d.clientCode == this.clientFilter);
    }
    
    this.dataSource = result;
  }

  resetFilter(){
    this.dataSource = this.products;
  }

}
