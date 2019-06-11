export class Contract {

    constructor(){}

    public id: number;
    public description: string;
    public startDate: Date;
    public endDate: Date;
    public incidentLimit: number;
    public responseTime: number;
    public penaltyApplied: boolean;
    public penalty: string;

    public client: string;

}