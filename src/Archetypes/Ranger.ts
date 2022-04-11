import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  protected static count = 0;
  energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Ranger.count += 1;
    this.energyType = 'stamina';
  }

  public static createdArchetypesInstances(): number {
    return Ranger.count;
  }
}