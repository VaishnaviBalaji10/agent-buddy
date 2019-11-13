import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentHealthComponent } from './agent-health/agent-health.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentDetailsComponent,
    AgentHealthComponent
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
