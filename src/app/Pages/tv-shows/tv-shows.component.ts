import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  tvshow: any
  constructor(private api: ApiService) { }
  ngOnInit() { 
    this.api.getTVShows().subscribe(tv => {
      this.tvshow = tv
      this.tvshow = this.tvshow.results
    })
  }
}
