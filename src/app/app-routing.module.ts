import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MoreInfoComponent } from './Pages/more-info/more-info.component';
import { TvShowsComponent } from './Pages/tv-shows/tv-shows.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "more-info", component: MoreInfoComponent },
  { path: "tv-shows", component: TvShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
