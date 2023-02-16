import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  imgUrl: any
  @Input() category: any = ''
  
  constructor(private api: ApiService) { }
  ngOnInit() { 
    this.imgUrl=this.api.imageUrl
  }
}
