const PROJECT_STATE_INITIAL_NAME = 'Inicio';
const PROJECT_STATE_IN_PROGRESS_NAME = 'En progreso';
const PROJECT_STATE_FINALIZED_NAME = 'Finalizado';
const PROJECT_STATE_CANCEL_NAME = 'Cancelado';

export default class ProjectState {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export const PROJECT_STATE_INITIAL = new ProjectState(PROJECT_STATE_INITIAL_NAME);
export const PROJECT_STATE_IN_PROGRESS = new ProjectState(PROJECT_STATE_IN_PROGRESS_NAME);
export const PROJECT_STATE_FINALIZED = new ProjectState(PROJECT_STATE_FINALIZED_NAME);
export const PROJECT_STATE_CANCEL = new ProjectState(PROJECT_STATE_CANCEL_NAME);

export const PROJECT_TYPE_LIST: ProjectState[] = [
    PROJECT_STATE_INITIAL,
    PROJECT_STATE_IN_PROGRESS,
    PROJECT_STATE_FINALIZED,
    PROJECT_STATE_CANCEL
];
