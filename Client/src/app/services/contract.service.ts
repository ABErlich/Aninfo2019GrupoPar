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
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Techint'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Total'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Central Perk'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Benelli'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Ford'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Boca Jrs'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'Neverest'},
        { description: 'Desc', startDate: new Date(), endDate: null, incidentLimit: 0, penalty: '', penaltyApplied: false, resolutionTime: 0, client: 'ECorp'},

      ];


    // Ejemplo de como hacer un GET a la API
    getContracts(): Contract[] {
        return this.contracts;
    }

    addContract(contract: Contract){
        this.contracts.push(contract);
    }

}