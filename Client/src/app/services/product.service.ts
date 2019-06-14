import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Product } from '../models/Product';
import { Requirement } from '../models/Requirement';
import { Client } from '../models/Client';
import { ClientService } from './client.service';

@Injectable()
export class ProductService{


    constructor(private clientService: ClientService){}

    private products: Product[] = [
        new Product({ id:1, name: 'CRM', version: '2.0.5', clientCode: '123', requirements:[]}),
        new Product({ id:2, name: 'CRM', version: '2.0.5', clientCode: '999',  requirements:[]}),
        new Product({ id:3, name: 'CRM', version: '3.1.1', clientCode: 'A8D',  requirements:[]}),
        new Product({ id:4, name: 'BI', version: '3.0.1', clientCode: 'A8D',  requirements:[]}),
        new Product({ id:5, name: 'BI', version: '2.0.5', clientCode: '999',  requirements:[]}),
        new Product({ id:6, name: 'ERP', version: '2.0.5', clientCode: '123',  requirements:[]}),
        new Product({ id:7, name: 'ERP', version: '2.1.5', clientCode: 'PM5',  requirements:[]}),
        new Product({ id:8, name: 'IMS', version: '2.0.4', clientCode: '354',  requirements:[]}),
        new Product({ id:9, name: 'IMS', version: '2.6.5', clientCode: '456',  requirements:[]}),
        new Product({ id:10, name: 'IMS', version: '2.0.5', clientCode: '999',  requirements:[]}),
      ];

    // Ejemplo de como hacer un GET a la API
    getProducts(): Product[] {

        this.products.forEach(p => {

            /// OBTENGO CLIENTES
            p.client = this.clientService.getClientByCode(p.clientCode);

        })


        return this.products;
    }

    addProduct(product: Product){
        this.products.push(product);
    }

    getRequirementsByProduct(productId: number){
        return this.products.find(p => p.id == productId).requirements;
    }

    getProductsByClient(clientCode: string): Product[]{
        return this.products.filter(p => p.clientCode == clientCode);
    }

}