import { Component } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent{

  constructor(private exampleService: ExampleService) { }

  // Se ejecuta al crearse el component
  ngOnInit() {
    var response = "";

    this.exampleService.exampleGet("param").subscribe((res) => {
      response = res;
    })


  }

}
