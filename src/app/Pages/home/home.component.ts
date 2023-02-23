import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trending: any
  actionId:any = 28
  action: any
  adventureId: any = 12
  adventure: any
  animationId: any = 16
  animation: any
  comedyId: any = 35
  comedy: any
  crimeId: any = 80
  crime: any
  documentaryId: any = 99
  documentary: any
  dramaId: any = 18
  drama: any
  familyId: any = 10751
  family: any
  fantasyId: any = 14
  fantasy: any
  historyId: any = 36
  history: any
  horrorId: any = 27
  horror: any
  musicId: any = 10402
  music: any
  mysteryId: any = 9648
  mystery: any
  romanceId: any = 10749
  romance: any
  scienceFictionId: any = 878
  scienceFiction: any
  tVMovieId: any = 10770
  tVMovie: any
  thrillerId: any = 53
  thriller: any
  warId: any = 10752
  war:any
  westernId: any = 37
  western: any
  loading: boolean = true
  count : number = 0
  constructor(private api: ApiService) { }

  ngOnInit() { 
    this.api.getTrending().subscribe(data => {
      this.trending = data
      this.trending = this.trending.results
      if (this.trending) {
        this.count++
      }      
    })

    this.api.getCategory(this.actionId).subscribe(data => { 
      this.action = data
      this.action = this.action.results
      if (this.action) {
        this.count++
      }  
    })

    this.api.getCategory(this.adventureId).subscribe(data => { 
      this.adventure = data
      this.adventure = this.adventure.results
      if (this.adventure) {
        this.count++
      }  
    })

    this.api.getCategory(this.animationId).subscribe(data => { 
      this.animation = data
      this.animation = this.animation.results
      if (this.animation) {
        this.count++
      }  
    })

    this.api.getCategory(this.comedyId).subscribe(data => { 
      this.comedy = data
      this.comedy = this.comedy.results
      if (this.comedy) {
        this.count++
      }  
    })

    this.api.getCategory(this.crimeId).subscribe(data => { 
      this.crime = data
      this.crime = this.crime.results
      if (this.crime) {
        this.count++
      }  
    })

    this.api.getCategory(this.documentaryId).subscribe(data => { 
      this.documentary = data
      this.documentary = this.documentary.results
      if (this.documentary) {
        this.count++
      }  
    })

    this.api.getCategory(this.dramaId).subscribe(data => { 
      this.drama = data
      this.drama = this.drama.results
      if (this.drama) {
        this.count++
      }  
    })

    this.api.getCategory(this.familyId).subscribe(data => { 
      this.family = data
      this.family = this.family.results
      if (this.family) {
        this.count++
      }  
    })

    this.api.getCategory(this.fantasyId).subscribe(data => { 
      this.fantasy = data
      this.fantasy = this.fantasy.results
      if (this.fantasy) {
        this.count++
      }  
    })

    this.api.getCategory(this.historyId).subscribe(data => { 
      this.history = data
      this.history = this.history.results
      if (this.history) {
        this.count++
      }  
    })

    this.api.getCategory(this.horrorId).subscribe(data => { 
      this.horror = data
      this.horror = this.horror.results
      if (this.horror) {
        this.count++
      }  
    })

    this.api.getCategory(this.musicId).subscribe(data => { 
      this.music = data
      this.music = this.music.results
      if (this.music) {
        this.count++
      }  
    })

    this.api.getCategory(this.musicId).subscribe(data => { 
      this.mystery = data
      this.mystery = this.mystery.results
      if (this.mystery) {
        this.count++
      }  
    })

    this.api.getCategory(this.romanceId).subscribe(data => { 
      this.romance = data
      this.romance = this.romance.results
      if (this.romance) {
        this.count++
      }  
    })

    this.api.getCategory(this.scienceFictionId).subscribe(data => { 
      this.scienceFiction = data
      this.scienceFiction = this.scienceFiction.results
      if (this.scienceFiction) {
        this.count++
      }  
    })

    this.api.getCategory(this.tVMovieId).subscribe(data => { 
      this.tVMovie = data
      this.tVMovie = this.tVMovie.results
      if (this.tVMovie) {
        this.count++
      }  
    })

    this.api.getCategory(this.thrillerId).subscribe(data => { 
      this.thriller = data
      this.thriller = this.thriller.results
      if (this.thriller) {
        this.count++
      }  
    })

    this.api.getCategory(this.warId).subscribe(data => { 
      this.war = data
      this.war = this.war.results
      if (this.war) {
        this.count++
      }  
    })

    this.api.getCategory(this.westernId).subscribe(data => { 
      this.western = data
      this.western = this.western.results
      if (this.western) {
        this.count++
      }  
      if (this.count > 4) {
        this.loading=false
      }
      console.log(this.count);
      
    })   
  
  }
}
