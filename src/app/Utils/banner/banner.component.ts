import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  sData: any
  image: any
  @Input() singleData:any = ''

  constructor(private api: ApiService) { }

  ngOnInit() { 
    let pageId = localStorage.getItem('id')
    let id = Number(pageId)
    this.api.getTrending().subscribe(d => {
      this.sData = d
      this.sData = this.sData.results
    })
    this.image = this.api.imageUrl
  }
}
