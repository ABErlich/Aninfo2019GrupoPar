import Task from './Task';
import Resource from './Resource';
import Risk from './Risk';
import ProjectType from './ProjectType';
import ProjectState from './ProjectState';

export default class Project {
    public code: any;
    public name: any;
    public leader: Resource;
    public beginDate: any;
    public endDate: any;
    public description: any;
    public currentVersion: any;
    public tasks: Task[];
    public risks: Risk[];
    public type: ProjectType;
    public state: ProjectState;
    public resources: Resource[];

    private riskThreshold: number = 0.5;

    constructor() {
        this.tasks = [];
        this.risks = [];
        this.resources = [];
    }

    addTask(task: Task): any {
        this.tasks.push(task);
    }

    dedicatedTime(): number {
        return this.tasks.map(t => t.dedicatedTime)
                         .reduce((a: number, b: number) => a + b, 0);
    }

    atRisk(): boolean {
        return this.risks.some(r => r.aboveThreshold(this.riskThreshold));
    }

    risksAboveThreshold(): Risk[] {
        return this.risks.filter(r => r.aboveThreshold(this.riskThreshold));
    }
}
