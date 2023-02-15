import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trending: any
  action: any
  horror:any
  constructor(private api: ApiService) { }
  ngOnInit() { 
    this.api.getTrending().subscribe(data => {
      this.trending = data
      this.trending = this.trending.results
    })

    this.api.getAction().subscribe(data => { 
      this.action = data
      this.action = this.action.results
    })

    this.api.getHorror().subscribe(data => { 
      this.horror = data
      this.horror = this.horror.results
    })

  }
}
