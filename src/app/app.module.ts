import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Utils/navbar/navbar.component';
import { FooterComponent } from './Utils/footer/footer.component';
import { HomeBannerComponent } from './Utils/home-banner/home-banner.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './Utils/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeBannerComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
