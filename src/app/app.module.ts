import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MajorCitiesComponent } from './components/major-cities/major-cities.component';
import { MyCityComponent } from './components/my-city/my-city.component';
import { LoadIconComponent } from './components/load-icon/load-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MajorCitiesComponent,
    MyCityComponent,
    LoadIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
