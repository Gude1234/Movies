import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatingService {

  selectedSeats =[]
  price:number

  constructor(private http:HttpClient) { }

    

  GetSeatTypes(){
    return this.http.get('http://localhost:5258/api/SeatTypes')
  }

  GetSeats(){
    return this.http.get('http://localhost:5258/api/Seats')
  }

  GetSeatsbyrow(row:string){
    return this.http.get(`http://localhost:5258/api/Seats/byrow/${row}`)
  }

  GetSeatsbyId(id:number){
    return this.http.get(`http://localhost:5258/api/Seats/${id}`)
  }

}
