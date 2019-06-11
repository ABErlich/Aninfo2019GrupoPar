import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Product } from '../models/Product';

@Injectable()
export class ProductService extends BaseService{

    private products: Product[] = [
        { id:1, name: 'CRM', version: '2.0.5', client: 'Techint'},
        { id:2, name: 'CRM', version: '2.0.5', client: 'Total'},
        { id:3, name: 'CRM', version: '3.1.1', client: 'Toyota'},
        { id:4, name: 'BI', version: '3.0.1', client: 'Toyota'},
        { id:5, name: 'BI', version: '2.0.5', client: 'Total'},
        { id:6, name: 'ERP', version: '2.0.5', client: 'Techint'},
        { id:7, name: 'ERP', version: '2.1.5', client: 'Ford'},
        { id:8, name: 'IMS', version: '2.0.4', client: 'Benelli'},
        { id:9, name: 'IMS', version: '2.6.5', client: 'Central Perk'},
        { id:10, name: 'IMS', version: '2.0.5', client: 'Total'},
      ];


    // Ejemplo de como hacer un GET a la API
    getProducts(): Product[] {
        return this.products;
    }

    addProduct(product: Product){
        this.products.push(product);
    }

}