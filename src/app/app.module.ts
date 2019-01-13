import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckService } from './deck.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
