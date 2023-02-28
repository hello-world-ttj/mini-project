import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchKey = ''
  genres: any
  userName: string = ""
  constructor(private api: ApiService, public auth: AngularFireAuth, private fireService: AuthService) { 
    this.getUser()
  }
  
  ngOnInit() { 
    this.api.getGenres().subscribe(genre => {
      this.genres = genre
      this.genres = this.genres.genres
    })
  }

  search(e: any) {
    this.searchKey = (e.target as HTMLInputElement).value
    // console.log(this.searchKey);
    this.api.search.next(this.searchKey)
    
  }

  getCat(id: any) {
    localStorage.setItem('cat', id)
  }

  signOut() {
    this.auth.signOut()
  }

    getUser() {
    this.auth.user.subscribe(data => { 
      let userId = data?.uid
      this.fireService.getUserById(userId).then(data => { 
        this.userName = data.name
      })
    })
  }
}
