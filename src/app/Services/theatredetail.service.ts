import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheatredetailService {

  theatre:any
  time:any
  date:Date
  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

  constructor(private http:HttpClient) { }

  GetTheatreDetails(){
    return this.http.get('http://localhost:5258/api/TheatreDetails')
  }

  GetTheatreDetailsbyId(id:number){
    return this.http.get(`http://localhost:5258/api/TheatreDetails/${id}`)
  }
}
