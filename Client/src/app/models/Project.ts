import Task from './Task';

export default class Project {
    public id: any;
    public name: any;
    public leader: any;
    public description: any;
    public currentVersion: any;
    public tasks: Task[];

    constructor() {
    }
}