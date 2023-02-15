import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent {
  trending: any
  image: any
  video: any
  videoArray: any
  vUrl:any
  constructor(private api: ApiService) { }
  
  ngOnInit() { 
    this.api.getTrending().subscribe(data => {
      this.trending = data
      this.trending = this.trending.results[1]
      // console.log(this.trending);
      this.image = this.api.imageUrl
      this.videoArray = this.api.getVideoArray(this.trending.id)
      this.videoArray.subscribe((d:any) => {
        this.videoArray = d
        this.video=this.videoArray.results[4].key
      })      
    })
    this.vUrl=this.api.videoUrl
  }

  moreInfo(id: any) {
    localStorage.setItem('id', id)
  }

  

}
