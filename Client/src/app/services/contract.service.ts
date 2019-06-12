import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Product } from '../models/Product';
import { Contract } from '../models/Contract';
import { ContractsConfigurations } from '../models/ContractsConfiguration';
import { Ticket } from '../models/Ticket';

@Injectable()
export class ContractService extends BaseService{

    private EXPIRE_MESSAGE: string = "El contrato esta a punto de vencerse";
    private INCIDENTS_MESSAGE: string = "La cantidad de incidencias supero el umbral de alerta";

    private configuration: ContractsConfigurations = new ContractsConfigurations();
    private contracts: Contract[] = [
        new Contract({ id: 1, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: '', penaltyApplied: false, responseTime: 4, client: 'Techint'}),
        new Contract({ id: 2, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: '', penaltyApplied: false, responseTime: 4, client: 'Total'}),
        new Contract({ id: 3, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 100, penalty: '', penaltyApplied: false, responseTime: 4, client: 'Central Perk'}),
        new Contract({ id: 4, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 20, penalty: '', penaltyApplied: false, responseTime: 1, client: 'Benelli'}),
        new Contract({ id: 5, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 20, penalty: '', penaltyApplied: false, responseTime: 1, client: 'Ford'}),
        new Contract({ id: 6, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 200, penalty: '', penaltyApplied: false, responseTime: 8, client: 'Boca Jrs'}),
        new Contract({ id: 7, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 200, penalty: '', penaltyApplied: false, responseTime: 8, client: 'Neverest'}),
        new Contract({ id: 8, description: 'Descripción clausulas del contrato', startDate: new Date(), endDate: null, incidentLimit: 50, penalty: '', penaltyApplied: false, responseTime: 2, client: 'ECorp'}),

      ];

    getContracts(): Contract[] {

        // Configuro las alertas
        this.contracts.forEach(c => {

            ////// ALERTAS DE VENCIMIENTO
            var date = new Date();
            date.setDate(date.getDate() + this.configuration.daysBeforeExpiration);

            if(c.endDate && date >= c.endDate){
                c.showAlert = true;
                
                if(!c.alertMessages.includes(this.EXPIRE_MESSAGE)) {
                    c.alertMessages.push(this.EXPIRE_MESSAGE);
                }

            }
            ///////

            /////// ALERTAS DE INCIDENCIAS
            var alertLimit = c.incidentLimit * this.configuration.percentageOfTotalIncidents / 100;
           
            if(c.incidents && c.incidents.length >= alertLimit){
                c.showAlert = true;

                if(!c.alertMessages.includes(this.INCIDENTS_MESSAGE)){
                    c.alertMessages.push(this.INCIDENTS_MESSAGE);
                }

            }
            /////////////////////////

        })



        return this.contracts;
    }

    addContract(contract: Contract){

        var lastId = this.contracts.map(c => c.id).sort()[this.contracts.length-1];
        contract.id = lastId + 1;
        this.contracts.push(contract);
    }

    getById(id: number){
        return this.contracts.find(c => c.id == id);
    }

    editContract(contract: Contract){
        var index = this.contracts.findIndex(c => c.id == contract.id)
        this.contracts.splice(index, 1, contract);
    }

    getConfiguration(){
        return this.configuration;
    }

    editConfiguration(conf: ContractsConfigurations){
        this.configuration = conf;
    }

}