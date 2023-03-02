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
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadingComponent } from './Utils/loading/loading.component';
import { ImgLoadingComponent } from './Utils/img-loading/img-loading.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SignInUpComponent } from './Pages/sign-in-up/sign-in-up.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ErrorComponent } from './Utils/error/error.component';
import { FavoriteComponent } from './Pages/favorite/favorite.component';
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
    CarouselComponent,
    LoadingComponent,
    ImgLoadingComponent,
    SignInUpComponent,
    ErrorComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
