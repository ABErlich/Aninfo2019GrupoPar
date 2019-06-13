import Task from './Task';
import Risk from './Risk';

export default class Project {
    public code: any;
    public name: any;
    public leader: any;
    public beginDate: any;
    public endDate: any;
    public description: any;
    public currentVersion: any;
    public tasks: Task[];
    public risks: Risk[];

    constructor() {
        this.tasks = [];
        this.risks = [];
    }
}