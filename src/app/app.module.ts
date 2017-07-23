import { SideBarComponent } from './side-bar/side-bar.component';
import { CoinbaseService } from './services/coinbase.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    CoinbaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
