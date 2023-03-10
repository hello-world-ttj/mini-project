import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
  tvshow: any
  loading: boolean = true
  constructor(private api: ApiService) { }
  ngOnInit() { 
    this.api.getTVShows().subscribe(tv => {
      this.tvshow = tv
      this.tvshow = this.tvshow.results
      this.tvshow ? this.loading = false : this.loading = true
    })
  }
}
