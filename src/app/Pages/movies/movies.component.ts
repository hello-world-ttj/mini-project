import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movie: any
  loading: boolean = true
  constructor(private api: ApiService, public auth: AngularFireAuth) { }
  ngOnInit() { 
    this.api.getMovies().subscribe(tv => {
      this.movie = tv
      this.movie = this.movie.results
      this.movie ? this.loading = false : this.loading = true
    })
  }
}
