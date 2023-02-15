import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  sData: any
  singleData: any
  image: any
  video: any
  videoArray: any
  vUrl:any
  @Input() data: any = ''
  constructor(private api: ApiService) { }

  ngOnInit() { 
    let pageId = localStorage.getItem('id')
    let id = Number(pageId)
    this.api.getTrending().subscribe(d => {
      this.sData = d
      this.sData = this.sData.results
      // console.log(this.sData);
      this.singleData = this.sData.filter((res: any) => res.id === id)
      // console.log(this.singleData);
      this.videoArray = this.api.getVideoArray(id)
      this.videoArray.subscribe((d:any) => {
        this.videoArray = d
        this.video = this.videoArray.results[1].key
        console.log(this.video);
        
      }) 
    })
    this.image = this.api.imageUrl
    this.vUrl=this.api.videoUrl
  }
}
