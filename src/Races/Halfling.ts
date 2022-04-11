import Race from './Race';

export default class Halfling extends Race {
  public lifePoints = 60;
  protected static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
    Halfling.count += 1;
  }

  public get maxLifePoints(): number {
    return this.lifePoints;
  }

  public static createdRacesInstances(): number | Error {
    return Halfling.count;
  }
}