import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import getRandomInt from './utils';

export default class Character implements Fighter {
  _lifePoints: number;
  _strength: number;
  _defense: number;
  _energy: Energy;
  _race: Race;
  _archetype: Archetype;
  _maxLifePoints: number;
  _dexterity: number;
  name: string;
  constructor(
    name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf('Elf', this._dexterity);
    this._archetype = new Mage('Mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10), 
    };
    this.name = name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return this._energy;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const e = enemy;
    e.lifePoints -= this.strength;
  }

  special?(enemy: Fighter): void 

  levelUp(): void {
    if (this._maxLifePoints <= this._race.maxLifePoints) { 
      const newLife = this._maxLifePoints + getRandomInt(1, 10);
      if (newLife < this._race.maxLifePoints) {
        this._maxLifePoints = newLife;
      } else {
        this._maxLifePoints = this._race.maxLifePoints;
      }
    }
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._energy) this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0 && this._lifePoints > 0) this._lifePoints -= damage;
    if (damage <= 0 && this._lifePoints >= 0) this._lifePoints -= 1;

    return this.lifePoints;
  }
}