import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { appRoutes } from './routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddLocationComponent } from './components/addLocation/addLocation.component';
import { FindLocationComponent } from './components/findLocation/findLocation.component';

import { Key } from './API_KEY';

import { GoogleApiService } from './services/googleApi.service';
import { HousingService } from './services/housing.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddLocationComponent,
    FindLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: Key.api_key
    }),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    GoogleApiService,
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
