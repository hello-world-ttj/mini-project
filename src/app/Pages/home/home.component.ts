import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trending:any
  constructor(private api: ApiService) { }
  ngOnInit() { 
    this.api.getTrending().subscribe(data => {
      this.trending = data
      this.trending = this.trending.results
      // console.log(this.trending);
    })
  }
}
