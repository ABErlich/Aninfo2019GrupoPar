import Project from './Project';
import Skill from './Skill';

export enum Roles {
  DEVELOPER = 'Desarrollador',
  ANALYST = 'Analista Funcional',
  PROJECT_LEADER = 'Lider de Proyecto',
  PRODUCT_LEADER = 'Lider de Producto',
  SOFTWARE_ARCHITECHT = "Arquitecto de Software",
  QA = "QA",
  AUTOMATIZATION = "Automatización",
  DEVOPS = "DevOps",
  DATA_SCIENTIST = "Data Scientist"
}

export type Assignment = { project: Project, role: Roles, hours: number }

export default class Resource {

  public id: number;
  public name: string;
  public assignments: Assignment[];
  public availableHours: number;
  public skills: Skill[];

  constructor(
    id?: number,
    name?: string,
    assignments?: Assignment[],
    availableHours?: number,
    skills?: Skill[]
  ){
    this.id = id;
    this.name = name;
    this.assignments = assignments;
    this.skills = skills;
    this.availableHours = availableHours;
  };
}
