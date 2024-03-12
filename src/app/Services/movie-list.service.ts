import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  movie:any
  languageselected:string

  constructor(private http: HttpClient) { }

  GetMovies(){
    return this.http.get('http://localhost:5258/api/MovieDetails')
  }

  GetMovieById(id:number){
    return this.http.get(`http://localhost:5258/api/MovieDetails/${id}`)
  }
  
}
