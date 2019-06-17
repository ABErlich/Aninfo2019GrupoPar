import Task from './Task';
import Risk from './Risk';
import ProjectType from './ProjectType';
import ProjectState from './ProjectState';

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
    public type: ProjectType;
    public state: ProjectState;

    constructor() {
        this.tasks = [];
        this.risks = [];
    }

    addTask(task: Task): any {
        this.tasks.push(task);
    }

    dedicatedTime(): number {
        return this.tasks.map(t => t.dedicatedTime)
                         .reduce((a: number, b: number) => a + b, 0);
    }
}