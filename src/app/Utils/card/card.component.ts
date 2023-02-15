import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  imgUrl: any
  @Input() datas: any = ''
  constructor(private api: ApiService,private router:Router) { }

  ngOnInit() { 
    this.imgUrl = this.api.imageUrl     
  }

  moreInfo(id: any) {
    localStorage.setItem('id', id)
    this.router.navigate(['/more-info'])
  }



}
