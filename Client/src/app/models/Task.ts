export enum TaskPriority {
    LOW = 'Baja',
    MEDIUM = 'Media',
    HIGH = 'Alta'
}

export enum TaskState {
    DEVELOPMENT = 'Desarrollo',
    COMPLETED = 'Completado',
    PENDING = 'Pendiente'
}

export default class Task {
    public name: string;
    public asignee: string;
    public priority: TaskPriority;
    public state: TaskState;
    public estimatedTime: number;
    public dedicatedTime: number;

    public projectId: string;
    public description: any;

    constructor(name?: string, asignee?: string, state?: TaskState,
                priority?: TaskPriority, estimatedTime?: number, dedicatedTime?: number) {
        this.name = name;
        this.asignee = asignee;
        this.state = state;
        this.priority = priority;
        this.estimatedTime = estimatedTime;
        this.dedicatedTime = dedicatedTime;
    }
}