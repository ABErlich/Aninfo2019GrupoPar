
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/ProjectService';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { DataSource } from '@angular/cdk/table';
import { Requirement } from 'src/app/models/Requirement';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{

  requirements: Requirement[] = null;

  constructor(private productService: ProductService, private exampleService: ExampleService, private route: ActivatedRoute) {
  }

  // Se ejecuta al crearse el component
  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
        var productId = this.route.snapshot.queryParams["productId"];
        console.log(productId);
        this.requirements = this.productService.getRequirementsByProduct(productId);
        
        console.log(this.requirements);

    });
    
  }



}
