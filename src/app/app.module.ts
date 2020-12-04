import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgxGaugeModule } from 'ngx-gauge';
import { GaugeChildComponent } from './gauge-child/gauge-child.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxGaugeModule ],
  declarations: [ AppComponent, HelloComponent, GaugeChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
