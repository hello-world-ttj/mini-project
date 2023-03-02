import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  favItems: any
  image: any
  loading: boolean = true
  user:any
  constructor(private auth: AngularFireAuth, private fireService: AuthService, private api: ApiService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user=user
    })
    this.getFav()
    this.image = this.api.imageUrl
  }

  getFav() {
    this.auth.user.subscribe(user => {
      let userId = user?.uid
      this.fireService.getFav(userId).subscribe(datas => {
        this.favItems = datas
        // console.log(datas);
        this.favItems ? this.loading = false : this.loading = true
      })
    })
  }

  removeFav(itemId: any) {
      this.fireService.removeFav(itemId)
  }
}
