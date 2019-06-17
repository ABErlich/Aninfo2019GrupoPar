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
export class ProductService {


    constructor(private clientService: ClientService) { }


    private clients: Client[] = [
        { code: '123', name: 'Techint', address: 'Bouchard', email: "techint@techint.com", phoneNumbers: ["2414-6342", "2414-6343"] },
        { code: '999', name: 'Total', address: 'Moreno', email: "total@total.com", phoneNumbers: ["6343-2453"] },
        { code: '354', name: 'Benelli', address: 'Corrientes', email: "Benelli@Benelli.com", phoneNumbers: [] },
    ];

    private requeriments: Requirement[] = [
        { description: 'Pagar la factura' },
        { description: 'Se desea que la funcionalidad tenga soporte 24/7' },
        { description: 'Se necesita obtener reportes de facturacion para las reuniones mensuales' }
    ]

    private products: Product[] = [
        new Product({ id: 1, name: 'CRM', version: '2.0.5', client: this.clients[0], requirements: [this.requeriments[1], this.requeriments[2]] }),
        new Product({ id: 2, name: 'CRM', version: '2.0.5', client: this.clients[0], requirements: [this.requeriments[0], this.requeriments[2]] }),
        new Product({ id: 3, name: 'CRM', version: '3.1.1', client: this.clients[1], requirements: [] }),
        new Product({ id: 4, name: 'BI', version: '3.0.1', client: this.clients[1], requirements: [] }),
        new Product({ id: 5, name: 'BI', version: '2.0.5', client: this.clients[1], requirements: [] }),
        new Product({ id: 6, name: 'ERP', version: '2.0.5', client: this.clients[1], requirements: [] }),
        new Product({ id: 7, name: 'ERP', version: '2.1.5', client: this.clients[2], requirements: [] }),
        new Product({ id: 8, name: 'IMS', version: '2.0.4', client: this.clients[2], requirements: [] }),
        new Product({ id: 9, name: 'IMS', version: '2.6.5', client: this.clients[1], requirements: [] }),
        new Product({ id: 10, name: 'IMS', version: '2.0.5', client: this.clients[0], requirements: [] }),
    ];



    // Ejemplo de como hacer un GET a la API
    getProducts(): Product[] {

        this.products.forEach(p => {

            /// OBTENGO CLIENTES
            p.client = this.clientService.getClientByCode(p.client.code);

        })


        return this.products;
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    getRequirementsByProduct(productId: number) {
        return this.products.find(p => p.id == productId).requirements;
    }

    getProductById(productId: number) {
        const results: Product[] = this.products.filter(p => p.id === productId);
        return results.length ? results[0] : null;
    }

    getProductsByClient(clientCode: string): Product[] {
        return this.products.filter(p => p.client.code == clientCode);
    }

}