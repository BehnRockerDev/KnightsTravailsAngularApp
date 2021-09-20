import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KnightMovesService } from './knight-moves.service';
import { KnightsTravailsFormComponent } from './knights-travails-form/knights-travails-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KnightsTravailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    KnightMovesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
