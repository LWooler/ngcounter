import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SuperCounterComponent } from './super-counter/super-counter.component';
import { SuperDuperCounterComponent } from './super-duper-counter/super-duper-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SuperCounterComponent,
    SuperDuperCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
