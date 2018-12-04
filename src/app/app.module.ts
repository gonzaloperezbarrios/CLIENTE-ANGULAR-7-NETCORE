import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { CarroDetailComponent } from './carro-detail/carro-detail.component';
import { MessagesComponent } from './messages/messages.component'; 

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    CarroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
