import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent {
  tvshow: any
  loading: boolean = true
  user:any
  constructor(private api: ApiService, public auth: AngularFireAuth) { }
  ngOnInit() { 
    this.auth.user.subscribe(user => {
      this.user=user
    })
    this.api.getTVShows().subscribe(tv => {
      this.tvshow = tv
      this.tvshow = this.tvshow.results
      this.tvshow ? this.loading = false : this.loading = true
    })
  }
}
