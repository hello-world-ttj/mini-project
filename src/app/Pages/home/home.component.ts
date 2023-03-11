import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trending: any
  loading: boolean = true
  userMail: any
  user:any
  constructor(private api: ApiService, public auth: AngularFireAuth) { }

  ngOnInit() { 
    this.auth.user.subscribe(user => {
      this.user = user
      // console.log(this.user.uid);
      
    })
    
    this.api.getTrending().subscribe(data => {
      this.trending = data
      this.trending = this.trending.results
      this.trending ? this.loading = false : this.loading = true
    }) 
  }

  
}
