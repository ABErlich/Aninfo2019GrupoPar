import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Product } from '../models/Product';
import { Contract } from '../models/Contract';

@Injectable()
export class ContractService extends BaseService{

    private contracts: Contract[] = [
        { id: 1, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: '', penaltyApplied: false, responseTime: 4, client: 'Techint'},
        { id: 2, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: '', penaltyApplied: false, responseTime: 4, client: 'Total'},
        { id: 3, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: '', penaltyApplied: false, responseTime: 4, client: 'Central Perk'},
        { id: 4, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 20, penalty: '', penaltyApplied: false, responseTime: 1, client: 'Benelli'},
        { id: 5, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 20, penalty: '', penaltyApplied: false, responseTime: 1, client: 'Ford'},
        { id: 6, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 200, penalty: '', penaltyApplied: false, responseTime: 8, client: 'Boca Jrs'},
        { id: 7, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 200, penalty: '', penaltyApplied: false, responseTime: 8, client: 'Neverest'},
        { id: 8, description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 50, penalty: '', penaltyApplied: false, responseTime: 2, client: 'ECorp'},

      ];

    getContracts(): Contract[] {
        return this.contracts;
    }

    addContract(contract: Contract){
        this.contracts.push(contract);
    }

    getById(id: number){
        return this.contracts.find(c => c.id == id);
    }

    editContract(contract: Contract){
        var index = this.contracts.findIndex(c => c.id == contract.id)
        this.contracts.splice(index, 1, contract);
    }

}