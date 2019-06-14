import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Client } from '../models/Client';

@Injectable()
export class ClientService extends BaseService {

    private clients: Client[] = [
        { code: '123', name: 'Techint', address: 'Bouchard', email: "techint@techint.com", phoneNumbers: ["2414-6342", "2414-6343"] },
        { code: '999', name: 'Total', address: 'Moreno', email: "total@total.com", phoneNumbers: ["6343-2453"] },
        { code: '456', name: 'Central Perk', address: 'New York', email: "CPerk@CPerk.com", phoneNumbers: ["4565-8745"] },
        { code: '354', name: 'Benelli', address: 'Corrientes', email: "Benelli@Benelli.com", phoneNumbers: [] },
        { code: 'A8D', name: 'Ford', address: 'Pacheco', email: "Ford@Ford.com", phoneNumbers: ["2369-6599"] },
        { code: 'PM5', name: 'BocaJrs', address: 'Brandsen', email: "Boca@Boca.com", phoneNumbers: ["1212-1212"] },
        { code: '8UN', name: 'Neverest', address: 'Himalayas', email: "Never@Rest.com", phoneNumbers: ["8000-0042"] },
        { code: '90Z', name: 'ECorp', address: 'Belgrano', email: "Ecorp@Ecorp.com", phoneNumbers: ["4321-EVIL"] },

    ];

    getClients(): Client[] {
        return this.clients;
    }

    addClient(client: Client){
        if(!this.clients.map(c => c.name).includes(client.name)){
            this.clients.push(client);    
        }
        
    }

    // El nombre es nuestro identificador
    getClientByName(name: string): Client {
        return this.clients.filter(c => c.name == name)[0];

    }

    getClientByCode(code: string): Client{
        return this.clients.filter(c => c.code == code)[0];
    }

    getById(id: string){
        return this.clients.find(c => c.code == id);
    }
}