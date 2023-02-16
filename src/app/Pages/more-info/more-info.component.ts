import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {
  casts: any = false
  crew:any
  img: any
  vArray: any = false
  vUrl: any
  sData: any
  single: any
  constructor(private api:ApiService){}

  ngOnInit() { 
    let pageId = localStorage.getItem('id')
    let catId = localStorage.getItem('cat')
    let id = Number(pageId)

    this.sData = this.api.getTrending().subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    })    

    this.sData = this.api.getAction().subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    })  

    this.sData = this.api.getHorror().subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getTVShows().subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getMovies().subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(catId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 
    
    this.api.getCredit(id).subscribe(credit => {
      this.casts = credit    
      this.casts = this.casts.cast    
      this.crew = credit
      this.crew = this.crew.crew
      console.log(this.crew);
      
    })
    
    this.api.getVideoArray(id).subscribe(v => {
      this.vArray = v
      this.vArray = this.vArray.results
      
    })
    this.vUrl=this.api.videoUrl
    this.img = this.api.imageUrl
  }



}
