import { Action } from "@ngrx/store";

export const SET_CELL = "SET_CELL";
export const GET_CELL_STATE = "GET_CELL_STATE";
export const SET_WINNER = "SET_WINNER";
export const SET_DRAW = "SET_DRAW";
export const NEW_GAME = "NEW_GAME";
export const TOGGLE_PLAYER = "TOGGLE_PLAYER";
export const ADD_TIME = "ADD_TIME";


export class GetCellState implements Action {
  readonly type = GET_CELL_STATE;
  constructor(public xPos: number, public yPos: number) {}
}

export class SetCell implements Action {
  readonly type = SET_CELL;
  constructor(public xPos: number, public yPos: number) {}
}

export class SetWinner implements Action {
  readonly type = SET_WINNER;
  constructor(public winner: string) {}
}

export class SetDraw implements Action {
  readonly type = SET_DRAW;
}

export class NewGame implements Action {
  readonly type = NEW_GAME;
}

export class TogglePlayer implements Action {
  readonly type = TOGGLE_PLAYER;
}

export class AddTime implements Action {
  readonly type = ADD_TIME;
}

export type AppActionsTypes = SetCell | GetCellState | SetWinner | SetDraw | NewGame | TogglePlayer | AddTime;
