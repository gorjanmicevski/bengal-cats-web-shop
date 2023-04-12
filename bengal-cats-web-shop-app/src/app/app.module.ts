import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {InfoCardComponent} from './info-card/info-card.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import { UserRegisterComponent } from './user-register/user-register.component';
import {InputTextModule} from "primeng/inputtext";
import { NavbarComponent } from './navbar/navbar.component';
import { CatCarouselComponent } from './cat-carousel/cat-carousel.component';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    UserRegisterComponent,
    NavbarComponent,
    CatCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
