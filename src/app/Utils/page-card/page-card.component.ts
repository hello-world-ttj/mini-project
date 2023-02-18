import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.css']
})
export class PageCardComponent {
  searchText=''
  imgUrl: any
  @Input() category: any = ''
  constructor(private api: ApiService,private router:Router) { }

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
}
