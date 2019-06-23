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
import { TicketService } from './ticket.service';
import { ClientService } from './client.service';

@Injectable()
export class ContractService {


    constructor(private ticketService: TicketService, private clientService: ClientService) {
        
    }

    private EXPIRE_MESSAGE: string = "El contrato esta a punto de vencerse";
    private INCIDENTS_MESSAGE: string = "La cantidad de incidencias supero el umbral de alerta";
    private RESPONSE_MESSAGE: string = "El tiempo limite de respuesta a un incidente esta por alcanzarse";

    private configuration: ContractsConfigurations = new ContractsConfigurations();
    private contracts: Contract[] = [
        new Contract({ id: 1, description: 'Descripción clausulas del contrato', startDate: new Date("06/05/2018"), endDate: new Date("06/28/2019"), incidentLimit: 100, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 4, clientCode: '123'}),
        new Contract({ id: 2, description: 'Descripción clausulas del contrato', startDate: new Date("03/15/2019"), endDate: null, incidentLimit: 100, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 4, clientCode: '999'}),
        new Contract({ id: 3, description: 'Descripción clausulas del contrato', startDate: new Date("02/03/2019"), endDate: null, incidentLimit: 100, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 4, clientCode: '456'}),
        new Contract({ id: 4, description: 'Descripción clausulas del contrato', startDate: new Date("09/24/2018"), endDate: null, incidentLimit: 20, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 1, clientCode: '354'}),
        new Contract({ id: 5, description: 'Descripción clausulas del contrato', startDate: new Date("12/30/2018"), endDate: null, incidentLimit: 20, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 1, clientCode: 'A8D'}),
        new Contract({ id: 6, description: 'Descripción clausulas del contrato', startDate: new Date("11/01/2018"), endDate: null, incidentLimit: 200, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 8, clientCode: 'PM5'}),
        new Contract({ id: 7, description: 'Descripción clausulas del contrato', startDate: new Date("03/08/2018"), endDate: new Date("12/15/2019"), incidentLimit: 200, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 8, clientCode: '8UN'}),
        new Contract({ id: 8, description: 'Descripción clausulas del contrato', startDate: new Date("04/04/2019"), endDate: null, incidentLimit: 50, penalty: 'Descripción penalidades de incumplimiento del contrato', penaltyApplied: false, responseTime: 2, clientCode: '90Z'}),
      ];

    getContracts(): Contract[] {

        // Configuro las alertas
        this.contracts.forEach(c => {

            ////// OBTENGO Clientes
            c.client = this.clientService.getClientByCode(c.clientCode);

            ////// OBTENGO TICKETS RELACIONADOS A ESTE CONTRATO
            c.incidents = this.ticketService.getIncidentsByClient(c.clientCode);

            ////// ALERTAS DE VENCIMIENTO DE CONTRATO
            var date = new Date();
            date.setDate(date.getDate() + this.configuration.daysBeforeExpiration);

            if(c.endDate && date >= c.endDate){
                c.showAlert = true;
                
                if(!c.alertMessages.includes(this.EXPIRE_MESSAGE)) {
                    c.alertMessages.push(this.EXPIRE_MESSAGE);
                }

            }
            ///////

            /////// ALERTA DE TIEMPO DE RESPUESTA
            c.incidents.forEach(i => {
                var fechaLimite = new Date(i.fechaAlta);
                fechaLimite.setHours(i.fechaAlta.getHours() + c.responseTime);
                
                var diff = fechaLimite.getTime() - new Date().getTime(); // Diferencia en milisec
                diff = diff/1000; // Diferencia en seg;
                diff = diff/60; // Diferencia en minutos
                diff = diff/60; // Diferencia en Horas

                if(i.estado == "Abierto" && diff > 0 && diff < this.configuration.hoursBeforeResponseLimit){
                    c.showAlert = true;

                    if(!c.alertMessages.includes(this.RESPONSE_MESSAGE)){
                        c.alertMessages.push(this.RESPONSE_MESSAGE);
                    }
                }
            })
            
            //////

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