import Project from './Project';
import Skill from './Skill';

export enum Roles {
  DEVELOPER = 'Desarrollador',
  ANALYST = 'Analista Funcional',
  PROJECT_LEADER = 'Lider de Proyecto',
  PRODUCT_LEADER = 'Lider de Producto',
  SOFTWARE_ARCHITECHT = "Arquitecto de Software",
  QA = "QA"
}

export default class Resource {

  public id: number;
  public name: string;
  public project: Project;
  public role: Roles;
  public availableHours: number;
  public skills: Skill[];

  constructor(
    id?: number,
    name?: string,
    project?: Project,
    role?: Roles,
    availableHours?: number,
    skills?: Skill[]
  ){
    this.id = id;
    this.name = name;
    this.project = project;
    this.role = role;
    this.skills = skills;
    this.availableHours = availableHours;
  };
}
