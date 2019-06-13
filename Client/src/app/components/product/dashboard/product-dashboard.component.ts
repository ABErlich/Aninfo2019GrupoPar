
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent{

  displayedColumns: string[] = ['name', 'version', 'client', 'detail'];
  dataSource: Product[] = null;

  constructor(private productService: ProductService, private exampleService: ExampleService, private router: Router) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {

    var products = this.productService.getProducts();

    this.dataSource = products;

  }

  viewDetails(product: Product){
    this.router.navigate(['/detalle-producto'], { queryParams: { productId: product.id } });
  }



}
