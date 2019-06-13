export enum TaskPriority {
    LOW = 'Baja',
    MEDIUM = 'Media',
    HIGH = 'Alta'
}

export const TASK_PRIORITY_LIST: TaskPriority[] = [
    TaskPriority.LOW,
    TaskPriority.MEDIUM,
    TaskPriority.HIGH
]

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
                priority?: TaskPriority, estimatedTime?: number, dedicatedTime?: number,
                projectId?: string) {
        this.name = name;
        this.asignee = asignee;
        this.state = state;
        this.priority = priority;
        this.estimatedTime = estimatedTime;
        this.dedicatedTime = dedicatedTime;
        this.projectId = projectId;
    }
}