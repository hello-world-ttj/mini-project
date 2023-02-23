import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Pages/category/category.component';
import { HomeComponent } from './Pages/home/home.component';
import { MoreInfoComponent } from './Pages/more-info/more-info.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { TvShowComponent } from './Pages/tv-show/tv-show.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "more-info", component: MoreInfoComponent },
  { path: "tv-shows", component: TvShowComponent },
  { path: "movies", component: MoviesComponent },
  { path: "category/28", component: CategoryComponent },
  { path: "category/12", component: CategoryComponent },
  { path: "category/16", component: CategoryComponent },
  { path: "category/35", component: CategoryComponent },
  { path: "category/80", component: CategoryComponent },
  { path: "category/99", component: CategoryComponent },
  { path: "category/18", component: CategoryComponent },
  { path: "category/10752", component: CategoryComponent },
  { path: "category/14", component: CategoryComponent },
  { path: "category/36", component: CategoryComponent },
  { path: "category/27", component: CategoryComponent },
  { path: "category/10402", component: CategoryComponent },
  { path: "category/9648", component: CategoryComponent },
  { path: "category/10749", component: CategoryComponent },
  { path: "category/878", component: CategoryComponent },
  { path: "category/10770", component: CategoryComponent },
  { path: "category/52", component: CategoryComponent },
  { path: "category/53", component: CategoryComponent },
  { path: "category/37", component: CategoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
