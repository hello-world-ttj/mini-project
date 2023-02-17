import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey: any = "f8f30034762c30d2b636abbc909d70b4"
  imageUrl: any = "https://image.tmdb.org/t/p/original"
  videoUrl: any = "https://www.youtube.com/embed/"
  videoPath: any = "https://api.themoviedb.org/3/movie/"
  videoHalfPath: any = "/videos?api_key=" + this.apiKey + "&language=en-US"


  constructor(private http: HttpClient) { }

  
  getTrending():Observable<any>  {
    return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=" + this.apiKey)
  }

  getVideoArray(id: any):Observable<any> {
    return this.http.get(this.videoPath+id+this.videoHalfPath)
  }

  getCredit(id:any):Observable<any>  {
    return this.http.get(this.videoPath+id+"/credits?api_key="+this.apiKey+"&language=en-US")
  }

  getGenres():Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key="+this.apiKey+"&language=en-US")
  }

  getTVShows():Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/discover/tv?api_key="+this.apiKey+"&language=en-US")
  }

  getMovies():Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key="+this.apiKey+"&language=en-US&page=3")
  }

  getCategory(id:any):Observable<any> { 
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=" + this.apiKey+"&with_genres="+id+"&page=2")
  }

}
