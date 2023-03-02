import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})
export class PageCardComponent {
  searchText=''
  imgUrl: any
  @Input() category: any = ''
  constructor(private api: ApiService,private router:Router,private auth: AngularFireAuth, private fireService: AuthService) { }

  ngOnInit() { 
    this.imgUrl = this.api.imageUrl    
    this.api.search.subscribe(sData => {
      this.searchText=sData
    })
  }


  moreInfo(id: any) {
    localStorage.setItem('id', id)
    this.router.navigate(['/more-info'])
  }

  range(end: number): number[] {
    let start = 1
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  }

  addToFav(data: any) {
    this.auth.user.subscribe(user => { 
      let userId = user?.uid
      this.fireService.addFav(userId, data)
    })
  }


}
