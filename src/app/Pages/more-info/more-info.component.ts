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
  actionId:any = 28
  adventureId: any = 12
  animationId: any = 16
  comedyId: any = 35
  crimeId: any = 80
  documentaryId: any = 99
  dramaId: any = 18
  familyId: any = 10751
  fantasyId: any = 14
  historyId: any = 36
  horrorId: any = 27
  musicId: any = 10402
  mysteryId: any = 9648
  romanceId: any = 10749
  scienceFictionId: any = 878
  tVMovieId: any = 10770
  thrillerId: any = 53
  warId: any = 10752
  westernId: any = 37
  
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

    this.sData = this.api.getCategory(this.actionId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    })  

    this.sData = this.api.getCategory(this.adventureId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.animationId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.comedyId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.crimeId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.documentaryId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.dramaId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.familyId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.fantasyId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.historyId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.horrorId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.musicId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.mysteryId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.romanceId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.scienceFictionId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.tVMovieId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.thrillerId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.warId).subscribe(data => {
      this.sData = data
      this.sData = this.sData.results
      this.single = this.sData.filter((res: any) => res.id === id)
    }) 

    this.sData = this.api.getCategory(this.westernId).subscribe(data => {
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
