import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  imgUrl:any
  @Input() datas: any = ''
  constructor(private api: ApiService) { }

  ngOnInit() { 
   this.imgUrl = this.api.imageUrl
  }

}
