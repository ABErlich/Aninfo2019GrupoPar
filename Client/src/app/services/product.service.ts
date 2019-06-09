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
        { name: 'CRM', version: '2.0.5', client: 'Techint'},
        { name: 'CRM', version: '2.0.5', client: 'Total'},
        { name: 'CRM', version: '3.1.1', client: 'Toyota'},
        { name: 'BI', version: '3.0.1', client: 'Toyota'},
        { name: 'BI', version: '2.0.5', client: 'Total'},
        { name: 'ERP', version: '2.0.5', client: 'Techint'},
        { name: 'ERP', version: '2.1.5', client: 'Ford'},
        { name: 'IMS', version: '2.0.4', client: 'Benelli'},
        { name: 'IMS', version: '2.6.5', client: 'Central Perk'},
        { name: 'IMS', version: '2.0.5', client: 'Total'},
      ];


    // Ejemplo de como hacer un GET a la API
    getProducts(): Product[] {
        return this.products;
    }

}