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
import { MoreInfoComponent } from './Pages/more-info/more-info.component';
import { BannerComponent } from './Utils/banner/banner.component';
import { SafePipe } from './safe-pipe.pipe';
import { PageCardComponent } from './Utils/page-card/page-card.component';
import { TvShowComponent } from './Pages/tv-show/tv-show.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { CategoryComponent } from './Pages/category/category.component';
import { CarouselComponent } from './Utils/carousel/carousel.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeBannerComponent,
    CardComponent,
    MoreInfoComponent,
    BannerComponent,
    SafePipe,
    PageCardComponent,
    TvShowComponent,
    MoviesComponent,
    CategoryComponent,
    CarouselComponent
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
