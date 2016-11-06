import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent }     from './click-me.component';
import { KeyUpComponent_1}      from './keyup.component';
import { KeyUpComponent_3}      from './keyup-enter.component';
import { KeyUpComponent_4}      from './keyup-enter-blur.component';
import {LittleTourComponent}    from "./little-tour.component";
import {LoopbackComponent }     from './loop-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUpComponent_1,
    KeyUpComponent_3,
    KeyUpComponent_4,
    LittleTourComponent,
    LoopbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
