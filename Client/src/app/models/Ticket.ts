import { Client } from './Client';

export class Ticket {

    constructor() { }

    public numeroTicket: number;

    public clienteCode: string;
    public tipo: string;
    public producto: string;
    public vProducto: string;
    public severidad: string;
    public estado: string;
    public asunto: string;
    public descripcion: string;
    public responsable: string;

    public fechaAlta: Date;
    public departamento: string;


}