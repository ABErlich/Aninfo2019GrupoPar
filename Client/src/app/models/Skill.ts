export enum SkillLevels {
  LOW = '1',
  MID = '2',
  HIGH = '3'
}

export default class Skill {

  name: string;
  level: SkillLevels;
  description: string;

  constructor(name?: string, level?: SkillLevels, description?: string){
    this.name = name;
    this.level = level;
    this.description = description;
  };
}
