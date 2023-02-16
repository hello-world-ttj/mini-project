import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  genres:any
  constructor(private api: ApiService) { }
  
  ngOnInit() { 
    this.api.getGenres().subscribe(genre => {
      this.genres = genre
      this.genres = this.genres.genres
    })
  }
  getCat(id: any) {
    localStorage.setItem('cat', id)
  }
}
