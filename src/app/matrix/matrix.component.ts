import {
  SetWinner,
  SetDraw,
  NewGame,
  TogglePlayer,
  AddTime
} from "./../store/app.actions";
import { Matrix, EMPTY_CELL, GAME_ON, GAME_OFF } from "./../app.types";
import { AppState } from "./../store/app-state.model";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-matrix",
  templateUrl: "./matrix.component.html",
  styleUrls: ["./matrix.component.scss"]
})
export class MatrixComponent implements OnInit {
  matrix: Matrix;
  timer: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("App").subscribe(store => {
      if (store.status === GAME_OFF) {
        return;
      }

      const matrix = store.matrix;

      if (
        this.checkCols(matrix) ||
        this.checkRows(matrix) ||
        this.checkDiag(matrix)
      ) {
        this.store.dispatch(new SetWinner(store.currentPlayer));
        clearInterval(this.timer);
        return;
      }

      if (this.checkDraw(matrix)) {
        this.store.dispatch(new SetDraw());
        return;
      }
    });
  }

  newGame() {
    this.store.dispatch(new NewGame());
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.store.dispatch(new AddTime());
    }, 1000);
  }

  checkRows(matrix: Matrix) {
    for (let i = 0; i < matrix[0].length; i++) {
      const firstValue = matrix[0][i];
      if (firstValue === EMPTY_CELL) {
        continue;
      }
      let isMatch = true;
      for (const row of matrix) {
        const value = row[i];
        if (value !== firstValue) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        return true;
      }
    }
    return false;
  }

  checkCols(matrix: Matrix) {
    for (const col of matrix) {
      const firstValue = col[0];
      if (firstValue === EMPTY_CELL) {
        continue;
      }
      let isMatch = true;
      for (const value of col) {
        if (firstValue !== value) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        return true;
      }
    }
    return false;
  }
  checkDiag(matrix: Matrix) {
    if (
      (matrix[0][0] !== EMPTY_CELL &&
        matrix[0][0] === matrix[1][1] &&
        matrix[1][1] === matrix[2][2]) ||
      (matrix[0][2] !== EMPTY_CELL &&
        matrix[0][2] === matrix[1][1] &&
        matrix[1][1] === matrix[2][0])
    ) {
      return true;
    }
    return false;
  }

  checkDraw(matrix: Matrix) {
    for (const row of matrix) {
      for (const col of row) {
        if (col === EMPTY_CELL) {
          return false;
        }
      }
    }
    return true;
  }
}
