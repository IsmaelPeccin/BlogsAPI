import Race from './Race';

export default class Orc extends Race {
  public lifePoints = 74;
  protected static count = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 74;
    Orc.count += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  public static createdRacesInstances(): number | Error {
    return Orc.count;
  }
}