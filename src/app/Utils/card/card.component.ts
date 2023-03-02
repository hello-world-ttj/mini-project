import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  searchText = ''
  imgUrl: any
  imageLoaded = false
  favIcon: boolean = false
  @Input() datas: any = ''
  constructor(private api: ApiService, private router: Router, private auth: AngularFireAuth, private fireService: AuthService) { }

  ngOnInit() { 
    this.getFav()
    this.imgUrl = this.api.imageUrl
    this.api.search.subscribe(sData => {
      // console.log(sData);
      this.searchText = sData
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
      let added = this.fireService.addFav(userId, data)
      added.subscribe((data: any) => {
        alert(data)
      })
    })
  }

  getFav() {
    this.auth.user.subscribe(user => {
      let userId = user?.uid
      this.fireService.getFav(userId).subscribe(datas => {
        console.log(datas);
      })
    })
  }



}
