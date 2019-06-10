import { Injectable } from '@angular/core'
import 'rxjs/observable/of';
import { BaseService } from './base.service';
import 'rxjs/add/operator/map'
import { Ticket } from '../models/Ticket';

@Injectable()
export class TicketService extends BaseService {

    private tickets: Ticket[] = [
        { nroCliente: 123, cliente: 'Juan', tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alto', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 1', fechaAlta: new Date() },
        { nroCliente: 123, cliente: 'a', tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alto', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 1', fechaAlta: new Date() },
        { nroCliente: 999, cliente: 'b', tipo: 'Incidente', producto: 'SAP', vProducto: '1.0.0', severidad: 'Alto', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 1', fechaAlta: new Date() },
        { nroCliente: 456, cliente: 'bbv', tipo: 'Incidente', producto: 'BI', vProducto: '1.0.0', severidad: 'Alto', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 1', fechaAlta: new Date() },
        { nroCliente: 345, cliente: 'asd', tipo: 'Incidente', producto: 'CRM', vProducto: '1.0.0', severidad: 'Alto', estado: 'Abierto', asunto: 'Asuntototo', descripcion: 'Drescripcion', responsable: 'Responsable 1', fechaAlta: new Date() },

    ];

    // Ejemplo de como hacer un GET a la API
    getTickets(): Ticket[] {
        return this.tickets;
    }

}