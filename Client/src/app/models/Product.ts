import { Requirement } from './Requirement';
import { Client } from './Client';

export class Product {
    constructor(obj: Partial<Product>) {
        Object.assign(this, obj);

    }

    public id: number;
    public name: string;
    public version: string;

    public clientCode: string;
    public client: Client;

    public requirements: Requirement[];

}