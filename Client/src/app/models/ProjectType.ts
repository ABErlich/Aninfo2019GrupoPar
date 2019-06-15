const PROJECT_TYPE_IMPL_CODE = 'IMPL';
const PROJECT_TYPE_IMPL_NAME = 'Implementación';
const PROJECT_TYPE_DEV_CODE = 'DEV';
const PROJECT_TYPE_DEV_NAME = 'Desarrollo';

export default class ProjectType {
    public code: string;
    public name: string;

    constructor(code: string, name: string) {
        this.code = code;
        this.name = name;
    }
}

export const PROJECT_TYPE_DEV = new ProjectType(PROJECT_TYPE_DEV_CODE, PROJECT_TYPE_DEV_NAME);
export const PROJECT_TYPE_IMPL = new ProjectType(PROJECT_TYPE_IMPL_CODE, PROJECT_TYPE_IMPL_NAME);

export const PROJECT_TYPE_LIST: ProjectType[] = [
    PROJECT_TYPE_DEV,
    PROJECT_TYPE_IMPL
];
