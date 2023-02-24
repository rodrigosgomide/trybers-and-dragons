import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energy: EnergyType;
  static instances = 0;

  constructor(name: string, energytype: EnergyType = 'stamina') {
    super(name);
    this.energy = energytype;
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}