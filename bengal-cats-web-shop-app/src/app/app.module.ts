import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {InfoCardComponent} from './info-card/info-card.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {UserRegisterComponent} from './user-register/user-register.component';
import {InputTextModule} from "primeng/inputtext";
import {NavbarComponent} from './navbar/navbar.component';
import {CatCarouselComponent} from './cat-carousel/cat-carousel.component';
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {AboutUsComponent} from './about-us/about-us.component';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterStatusComponent} from './register-status/register-status.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    UserRegisterComponent,
    NavbarComponent,
    CatCarouselComponent,
    AboutUsComponent,
    FooterComponent,
    RegisterStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CarouselModule,
    TagModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
