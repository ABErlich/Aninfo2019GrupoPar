import Resource from './Resource';

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

export const TASK_STATE_LIST: TaskState[] = [
    TaskState.PENDING,
    TaskState.DEVELOPMENT,
    TaskState.COMPLETED
]

export default class Task {
    public name: string;
    public asignee: Resource;
    public priority: TaskPriority;
    public state: TaskState;
    public estimatedTime: number;
    public dedicatedTime: number;

    public projectId: string;
    public description: any;

    constructor(name?: string, asignee?: Resource, state?: TaskState,
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