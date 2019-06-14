import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Product } from '../models/Product';
import { Requirement } from '../models/Requirement';

@Injectable()
export class ProductService extends BaseService{

    private products: Product[] = [
        { id:1, name: 'CRM', version: '2.0.5', client: 'Techint', requirements:[new Requirement({description: "Requisito 1"}), new Requirement({description: "Requisito 2"})]},
        { id:2, name: 'CRM', version: '2.0.5', client: 'Total',  requirements:[]},
        { id:3, name: 'CRM', version: '3.1.1', client: 'Toyota',  requirements:[]},
        { id:4, name: 'BI', version: '3.0.1', client: 'Toyota',  requirements:[]},
        { id:5, name: 'BI', version: '2.0.5', client: 'Total',  requirements:[]},
        { id:6, name: 'ERP', version: '2.0.5', client: 'Techint',  requirements:[]},
        { id:7, name: 'ERP', version: '2.1.5', client: 'Ford',  requirements:[]},
        { id:8, name: 'IMS', version: '2.0.4', client: 'Benelli',  requirements:[]},
        { id:9, name: 'IMS', version: '2.6.5', client: 'Central Perk',  requirements:[]},
        { id:10, name: 'IMS', version: '2.0.5', client: 'Total',  requirements:[]},
      ];

    // Ejemplo de como hacer un GET a la API
    getProducts(): Product[] {
        return this.products;
    }

    addProduct(product: Product){
        this.products.push(product);
    }

    getRequirementsByProduct(productId: number){
        return this.products.find(p => p.id == productId).requirements;
    }

    getProductsByClient(client: string): Product[]{
        return this.products.filter(p => p.client == client);
    }

}