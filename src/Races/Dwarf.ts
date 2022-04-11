import Race from './Race';

export default class Dwarf extends Race {
  public lifePoints = 80;
  protected static count = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 80;
    Dwarf.count += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  public static createdRacesInstances(): number | Error {
    return Dwarf.count;
  }
}