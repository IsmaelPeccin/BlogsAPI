import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints: 999;

  constructor() {
    super();
    this._lifePoints = 999;
  }
}