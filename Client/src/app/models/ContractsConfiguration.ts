export class ContractsConfigurations{

    constructor(){
        this.daysBeforeExpiration = 0;
        this.percentageOfTotalIncidents = 95;
        this.hoursBeforeResponseLimit = 0;
    }


    public daysBeforeExpiration: number;
    public percentageOfTotalIncidents: number;
    public hoursBeforeResponseLimit: number;

}