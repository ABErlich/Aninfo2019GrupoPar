import { Injectable } from '@angular/core'
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import 'rxjs/add/operator/map'
import { Ticket } from '../models/Ticket';

@Injectable()
export class TicketService extends BaseService {

    private tickets: Ticket[] = [

        { numeroTicket: 1, clienteCode: "123", tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: 'Desarrollo', tareas: [] },
        { numeroTicket: 2, clienteCode: "123", tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'A la espera del cliente', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Juan Perez', fechaAlta: new Date(), departamento: '', tareas: [] },
        { numeroTicket: 3, clienteCode: "999", tipo: 'Incidente', producto: 'SAP', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Pablo Juanes', fechaAlta: new Date(), departamento: '', tareas: [] },
        { numeroTicket: 4, clienteCode: "456", tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Facundo Gonzalez', fechaAlta: new Date(), departamento: '', tareas: [] },
        { numeroTicket: 5, clienteCode: "354", tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alta', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Gonzalo Facundez', fechaAlta: new Date(), departamento: '', tareas: [] },

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

    addTicket(ticket: Ticket) {
        var lastId = this.tickets.map(c => c.numeroTicket).sort()[this.tickets.length - 1];
        ticket.numeroTicket = lastId + 1;
        this.tickets.push(ticket);
    }


    getIncidentsByClient(clientCode: string): Ticket[] {
        return this.tickets.filter(t => t.tipo == 'Incidente' && t.clienteCode == clientCode);
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