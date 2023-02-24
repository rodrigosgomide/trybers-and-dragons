import Race from './Race';

export default class Halfling extends Race {
  static instances = 0;
  lifePoints: number;

  constructor(name: string, dexterity: number, lifePoints = 60) {
    super(name, dexterity);
    Halfling.instances += 1;
    this.lifePoints = lifePoints;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}