import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energy: EnergyType;
  static instances = 0;

  constructor(name: string, energytype: EnergyType = 'mana') {
    super(name);
    this.energy = energytype;
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}