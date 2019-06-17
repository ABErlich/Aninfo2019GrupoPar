
import { ExampleService } from 'src/app/services/example.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { DataSource } from '@angular/cdk/table';
import { Requirement } from 'src/app/models/Requirement';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  requirements: Requirement[] = null;

  private product: Product;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProductService) { }

  ngOnInit() {
    const idParam: string = this.route.snapshot.paramMap.get('id');
    var id = parseInt(idParam);
    this.getProduct(id);
  }

  getProduct(id: number): void {
    this.product = this.service.getProductById(id);
  }

}
