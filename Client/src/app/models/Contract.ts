export class Contract {

    constructor(obj: Partial<Contract>) {
        Object.assign(this, obj);
        this.alertMessages = [];

    }

    public id: number;
    public description: string;
    public startDate: Date;
    public endDate: Date;
    public incidentLimit: number;
    public responseTime: number;
    public penaltyApplied: boolean;
    public penalty: string;

    public client: string;

    public showAlert: boolean;
    public alertMessages: string[];

}