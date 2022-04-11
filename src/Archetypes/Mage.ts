import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static count = 0;
  public energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.count += 1;
    this.energyType = 'mana';
  }

  public static createdArchetypeInstances() {
    return Mage.count;
  }
}
