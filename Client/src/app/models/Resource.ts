import Project from './Project';

export default class Resource {

    public id: number;
    public name: string;
    public project: Project;
    public role: string;
    public availableHours: number;

    constructor(id?: number, name?: string, project?: Project, role?: string, availableHours?: number) {
        this.id = id;
        this.name = name;
        this.project = project;
        this.role = role;
        this.availableHours = availableHours;
    }
}
