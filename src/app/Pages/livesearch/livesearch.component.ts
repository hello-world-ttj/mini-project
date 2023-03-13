import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-livesearch',
  templateUrl: './livesearch.component.html',
  styleUrls: ['./livesearch.component.css']
})
export class LivesearchComponent {

  searchKey:any = ''
  searchData: any = ''
  imgUrl:any
  loading: boolean = true
  
  constructor(private auth: AngularFireAuth, private fireService: AuthService, private api: ApiService) { }

  ngOnInit() {  }

  search(e: any) {
    this.searchKey = (e.target as HTMLInputElement).value
    // console.log(this.searchKey);    
    this.api.getSearch(this.searchKey).subscribe(data => {
      this.searchData = data
      this.searchData = this.searchData.results
      console.log(this.searchData);
      
    })
  }

  addToFav(data: any) {
    this.auth.user.subscribe(user => { 
      let userId = user?.uid
      this.fireService.addFav(userId, data)
    })
  }

}
