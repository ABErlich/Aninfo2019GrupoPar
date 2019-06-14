import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Client } from '../models/Client';

@Injectable()
export class ClientService extends BaseService{

    private clients: Client[] = [
        { name: 'Techint', address: 'Bouchard', email: "techint@techint.com", phoneNumbers: ["2414-6342","2414-6343"]},
        { name: 'Total', address: 'Moreno', email: "total@total.com", phoneNumbers: ["6343-2453"]},
        { name: 'Central Perk', address: 'New York', email: "CPerk@CPerk.com", phoneNumbers: ["4565-8745"]},
        { name: 'Benelli', address: 'Corrientes', email: "Benelli@Benelli.com", phoneNumbers: []},
        { name: 'Ford', address: 'Pacheco', email: "Ford@Ford.com", phoneNumbers: ["2369-6599"]},
        { name: 'BocaJrs', address: 'Brandsen', email: "Boca@Boca.com", phoneNumbers: ["1212-1212"]},
        { name: 'Neverest', address: 'Himalayas', email: "Never@Rest.com", phoneNumbers: ["8000-0042"]},
        { name: 'ECorp', address: 'Belgrano', email: "Ecorp@Ecorp.com", phoneNumbers: ["4321-EVIL"]},

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

}