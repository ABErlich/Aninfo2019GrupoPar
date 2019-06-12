export class Requirement{

    
    constructor(obj: Partial<Requirement>) {
        Object.assign(this, obj);
    }

    public description: string

}