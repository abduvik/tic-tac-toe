import { PLAYER_A, PLAYER_B, GAME_OFF, GAME_ON } from "./../app.types";
import * as AppActions from "./app.actions";
import { AppState } from "./app-state.model";

const initialState = new AppState();

export function AppReducers(
  state = initialState,
  action: AppActions.AppActionsTypes
) {
  switch (action.type) {
    case AppActions.SET_CELL:
      const matrix = state.matrix;
      matrix[action.xPos][action.yPos] = state.currentPlayer;
      return {
        ...state,
        matrix: matrix
      };
    case AppActions.TOGGLE_PLAYER:
      const nextUser = state.currentPlayer === PLAYER_A ? PLAYER_B : PLAYER_A;

      return {
        ...state,
        currentPlayer: nextUser
      };
    case AppActions.SET_WINNER:
      const stats = state.stats[action.winner];
      stats.won = stats.won + 1;
      return {
        ...state,
        status: GAME_OFF,
        stats: {
          ...state.stats,
          [action.winner]: stats
        }
      };
    case AppActions.SET_DRAW:
      return {
        ...state,
        status: GAME_OFF,
        stats: { ...state.stats, draw: state.stats.draw + 1 }
      };

    case AppActions.NEW_GAME:
      const newState = new AppState();
      const newMatrix = newState.matrix;
      return {
        ...state,
        status: GAME_ON,
        matrix: newMatrix
      };
  }
  return state;
}
