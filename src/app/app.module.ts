import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { CellComponent } from './matrix/cell/cell.component';
import { StatsComponent } from './stats/stats.component';

import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    CellComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({App: AppReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
