import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  cat: any
  loading: boolean = true
  user:any
  constructor(private api: ApiService,public auth: AngularFireAuth) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.user=user
    })
    let catId = localStorage.getItem('cat')
    this.api.getCategory(catId).subscribe(category => {
      this.cat = category
      this.cat = this.cat.results
      this.cat ? this.loading = false : this.loading = true
    })
  }
}
