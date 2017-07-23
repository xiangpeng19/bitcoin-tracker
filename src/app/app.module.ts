import { TrackerService } from './tracker/services/tracker.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    TrackerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
