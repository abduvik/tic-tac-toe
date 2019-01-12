import { GAME_ON, EMPTY_CELL, PLAYER_B } from "./../../app.types";
import * as AppActions from "./../../store/app.actions";
import { AppState } from "./../../store/app-state.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-cell",
  templateUrl: "./cell.component.html",
  styleUrls: ["./cell.component.scss"]
})
export class CellComponent implements OnInit {
  @Input() xPos: number;
  @Input() yPos: number;
  @Output() stateChange: EventEmitter<null> = new EventEmitter<null>();
  state: string;
  locked: boolean;
  playerB = PLAYER_B;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.locked = false;
    this.store.select("App").subscribe(store => {
      this.state = store.matrix[this.xPos][this.yPos];
      if (store.status !== GAME_ON || this.state !== EMPTY_CELL) {
        this.locked = true;
      } else {
        this.locked = false;
      }
    });
  }

  setState() {
    this.store.dispatch(new AppActions.SetCell(this.xPos, this.yPos));
    this.store.dispatch(new AppActions.TogglePlayer());
    this.locked = true;
    this.stateChange.emit();
  }
}
