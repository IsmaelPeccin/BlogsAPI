import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
  }
  
  public get race() : Race {
    return this._race;
  }

  public get archetype() : Archetype {
    return this._archetype;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  levelUp(): void {
    this.checkLifePoints();
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  checkLifePoints(): void {
    const totalPoints = this._maxLifePoints + getRandomInt(1, 10);

    if (totalPoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else this._maxLifePoints = totalPoints;
  }

  special(): number {
    if (this._lifePoints < 15) {
      this._lifePoints += 20;
    }
    return this._lifePoints;
  }
}