import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movie: any
  constructor(private api: ApiService) { }
  ngOnInit() { 
    this.api.getMovies().subscribe(tv => {
      this.movie = tv
      this.movie = this.movie.results
    })
  }
}
