import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './main/home/slider/slider.component';
import { BoxesComponent } from './main/boxes/boxes.component';
import { BouquetsComponent } from './main/bouquets/bouquets.component';
import { CraftPackComponent } from './main/craft-pack/craft-pack.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { BoxContentComponent } from './box-content/box-content.component';
import { BoxServiceService } from './main/service/box-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SliderComponent,
    BoxesComponent,
    BouquetsComponent,
    CraftPackComponent,
    AboutUsComponent,
    ContactUsComponent,
    MainComponent,
    BoxContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    CommonModule,
    FormsModule
  ],
  providers: [
    BoxServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
