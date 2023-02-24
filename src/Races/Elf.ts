import Race from './Race';

export default class Elf extends Race {
  static instances = 0;
  lifePoints: number;

  constructor(name: string, dexterity: number, lifePoints = 99) {
    super(name, dexterity);
    Elf.instances += 1;
    this.lifePoints = lifePoints;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}