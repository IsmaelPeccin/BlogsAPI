import Race from './Race';

export default class Elf extends Race {
  public lifePoints = 99;
  protected static count = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 99;
    Elf.count += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  public static createdRacesInstances(): number | Error {
    return Elf.count;
  }
}