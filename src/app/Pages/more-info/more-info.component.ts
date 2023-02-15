import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {
  casts: any
  img: any
  vArray: any
  vUrl: any
  constructor(private api:ApiService){}

  ngOnInit() { 
    let pageId = localStorage.getItem('id')
    let id = Number(pageId)
    this.api.getCredit(id).subscribe(credit => {
      this.casts = credit    
      this.casts = this.casts.cast    
    })
    this.img = this.api.imageUrl
    
    this.api.getVideoArray(id).subscribe(v => {
      this.vArray = v
      this.vArray = this.vArray.results
      console.log(this.vArray);
      
    })
    this.vUrl=this.api.videoUrl
    
  }



}
