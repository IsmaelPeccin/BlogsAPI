import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  protected static count = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.count += 1;
    this.energyType = 'mana';
  }

  public static createdArchetypeInstances() {
    return Necromancer.count;
  }
}