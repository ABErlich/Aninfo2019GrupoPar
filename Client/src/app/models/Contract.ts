import { Ticket } from './Ticket';
import { Client } from './Client';

export class Contract {

    constructor(obj: Partial<Contract>) {
        Object.assign(this, obj);
        this.alertMessages = [];
        this.incidents = [];
    }

    public id: number;
    public description: string;
    public startDate: Date;
    public endDate: Date;
    public incidentLimit: number;
    public responseTime: number;
    public penaltyApplied: boolean;
    public penalty: string;

    public clientCode: string;
    public client: Client;
    public incidents: Ticket[];

    public showAlert: boolean;
    public alertMessages: string[];

}