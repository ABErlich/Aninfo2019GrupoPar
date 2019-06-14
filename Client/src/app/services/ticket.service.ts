import { Injectable } from '@angular/core'
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import 'rxjs/add/operator/map'
import { Ticket } from '../models/Ticket';

@Injectable()
export class TicketService extends BaseService {

    private tickets: Ticket[] = [
        { numeroTicket: 1, nroCliente: 123, cliente: 'Juan', tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 1', fechaAlta: new Date(), departamento: 'Desarrollo' },
        { numeroTicket: 2, nroCliente: 123, cliente: 'a', tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 2', fechaAlta: new Date(), departamento: '' },
        { numeroTicket: 3, nroCliente: 999, cliente: 'b', tipo: 'Incidente', producto: 'SAP', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 2', fechaAlta: new Date(), departamento: '' },
        { numeroTicket: 4, nroCliente: 456, cliente: 'bbv', tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 3', fechaAlta: new Date(), departamento: '' },
        { numeroTicket: 5, nroCliente: 345, cliente: 'asd', tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 6', fechaAlta: new Date(), departamento: '' },

    ];

    // Ejemplo de como hacer un GET a la API
    getTickets(): Ticket[] {
        return this.tickets;
    }

    getTicket(id: number) {
        var resultado = null;
        this.tickets.forEach(element => {
            if (element.numeroTicket == id) {
                resultado = element;
            }
        });
        return resultado;
    }


    getIncidentsByClientName(name: String): Ticket[] {
        return this.tickets.filter(t => t.tipo == 'Incidente' && t.cliente == name);
    }


    getResponsables() {
        var results = this.removeDuplicates(this.tickets, 'responsable');
        return results;
    }

    removeDuplicates(originalArray, prop) {
        var newArray = [];
        var lookupObject = {};

        for (var i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for (i in lookupObject) {
            newArray.push(lookupObject[i][prop]);
        }
        return newArray;
    }

}