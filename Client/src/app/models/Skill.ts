export enum SkillLevels {
  LOW = 1,
  MID = 2,
  HIGH = 3
}

export default class Skill {

  name: string;
  level: number;
  description: SkillLevels;

  constructor(name?: string, level?: number, description?: SkillLevels){
    this.name = name;
    this.level = level;
    this.description = description;
  };
}
