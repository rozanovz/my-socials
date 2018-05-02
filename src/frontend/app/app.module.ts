import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule }    from '@angular/common/http';

import { MessagesService } from '../services/messages.service';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessagesComponent,
    HomeComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
