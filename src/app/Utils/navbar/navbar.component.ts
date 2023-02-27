import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchKey = ''
  genres: any
  constructor(private api: ApiService,private auth: AuthService) { }
  
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
}
