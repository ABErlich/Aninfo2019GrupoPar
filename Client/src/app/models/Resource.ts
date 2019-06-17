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

export const DEFAULT_AVAILABILITY = 9;

export default class Resource {

  id: number;
  name: string;
  project: Project;
  role: Roles;
  skills: Skill[];
  availability: number;

  constructor(
    id?: number,
    name?: string,
    project?: Project,
    role?: Roles,
    skills?: Skill[],
    availability: number = DEFAULT_AVAILABILITY
  ){
    this.id = id;
    this.name = name;
    this.project = project;
    this.role = role;
    this.skills = skills;
    this.availability = availability;
  };
}
