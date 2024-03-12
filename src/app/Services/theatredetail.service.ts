import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheatredetailService {

  theatre:any
  time:any

  constructor(private http:HttpClient) { }

  GetTheatreDetails(){
    return this.http.get('http://localhost:5258/api/TheatreDetails')
  }

  GetTheatreDetailsbyId(id:number){
    return this.http.get(`http://localhost:5258/api/TheatreDetails/${id}`)
  }
}
