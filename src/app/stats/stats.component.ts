import { PLAYER_A, PLAYER_B } from './../app.types';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app-state.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats: any;
  PLAYER_A = PLAYER_A;
  PLAYER_B = PLAYER_B;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('App').subscribe(store => {
      this.stats = store.stats;
    });
  }

}
