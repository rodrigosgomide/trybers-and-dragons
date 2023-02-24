export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;

  constructor(private _name: string, private _dexterity: number) {
    this.name = _name;
    this.dexterity = _dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints() : number;
}