export class ContractsConfigurations{

    constructor(){
        this.daysBeforeExpiration = 0;
        this.percentageOfTotalIncidents = 95;
        this.hoursBeforeResponseLimit = 2;
    }


    public daysBeforeExpiration: number;
    public percentageOfTotalIncidents: number;
    public hoursBeforeResponseLimit: number;

}