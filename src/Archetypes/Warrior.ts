import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  protected static count = 0;
  public energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.count += 1;
    this.energyType = 'stamina';
  }

  public static createdArchetypeInstances() {
    return Warrior.count;
  }
} 