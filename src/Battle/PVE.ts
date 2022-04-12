import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monstersArray: SimpleFighter[];

  constructor(player: Fighter, monstersArray: SimpleFighter []) {
    super(player);
    this._player = player;
    this._monstersArray = monstersArray;
  }

  fight(): number {
    this._monstersArray.forEach((monster) => {
      if (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });

    return super.fight();
  }
}