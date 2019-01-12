import { PLAYER_A, EMPTY_CELL, PLAYER_B, Matrix, GAME_IDLE } from './../app.types';

export class AppState {
  currentPlayer: string;
  matrix: Matrix;
  stats: any;
  status: string;
  winnerStatement: string;

  constructor() {
    this.status = GAME_IDLE;
    this.currentPlayer = PLAYER_A;
    this.matrix = [
      [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
      [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
      [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
    ];
    this.stats = {};
    this.stats[PLAYER_A] = {
      won: 0,
      time: 0
    };
    this.stats[PLAYER_B] = {
      won: 0,
      time: 0
    };
    this.stats.draw = 0;
    this.winnerStatement = '';
  }
}
