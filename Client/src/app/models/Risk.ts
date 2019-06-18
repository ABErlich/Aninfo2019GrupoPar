export default class Risk {
    public id: any;
    public motive: any;
    public description: any;
    public impact: number ;
    public probability: number;

    constructor() {
    }

    getExposition(): number {
        return this.probability * this.impact;
    }

    aboveThreshold(threshold: number): boolean {
        return this.getExposition() > threshold;
    }
}