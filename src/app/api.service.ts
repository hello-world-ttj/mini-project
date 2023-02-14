import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey: any = "f8f30034762c30d2b636abbc909d70b4"
  imageUrl: any ="https://image.tmdb.org/t/p/original"
  constructor(private http: HttpClient) { }
  getTrending() {
    return this.http.get("https://api.themoviedb.org/3/trending/all/day?api_key=" + this.apiKey)
  }
}
