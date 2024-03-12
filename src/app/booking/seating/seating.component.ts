import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieListService } from 'src/app/Services/movie-list.service';
import { SeatingService } from 'src/app/Services/seating.service';
import { TheatredetailService } from 'src/app/Services/theatredetail.service';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit{

  seatTypes : any
  seats = []
  rows = ['A','B','C','D','E','F','G','H']
  selectedseats = []
  theatre:any
  time:any
  price: number =0
  moviedetail:any
  id1:number
  isSelected = false
  language:string
  constructor(private seatservice:SeatingService, private theatredetail:TheatredetailService,private movieList: MovieListService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.theatre = this.theatredetail.theatre
    this.language = this.movieList.languageselected
    this.time = this.theatredetail.time
    this.route.params.subscribe((params: Params)=>{
      this.id1 = +params['id']
      this.movieList.GetMovieById(this.id1 + 1).subscribe(response =>{
        this.moviedetail = response
      })
    })
    this.seatservice.GetSeatTypes().subscribe(response =>{
      this.seatTypes = response
    })
    for(let row of this.rows){
      this.seatservice.GetSeatsbyrow(row).subscribe(response =>{
        this.seats.push(response)
      }) 
    }
  }

  toggleSelection(seat: any) {
    const seatIndex = this.selectedseats.indexOf(seat);
    if (seatIndex === -1) {
      this.selectedseats.push(seat);
      seat['status'] = 'Selected'
    } else {
      this.selectedseats.splice(seatIndex, 1);
      seat['status'] = 'Available'
    }
    this.price = this.selectedseats.length * 250;
    this.seatservice.selectedSeats = this.selectedseats;
    this.seatservice.price = this.selectedseats.length * 250;
  }

  onClick(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onSubmit(){
    this.router.navigate(['confirmation'], {relativeTo: this.route})
  }

  // toggleSelection(seat: any) {
  //   const seatIndex = this.seatservice.selectedSeats.indexOf(seat);
  //   if (seatIndex === -1) {
  //     this.seatservice.selectedSeats.push(seat);
  //   } else {
  //     this.seatservice.selectedSeats.splice(seatIndex, 1);
  //   }
  //   console.log(this.seatservice.selectedSeats)
  // }
}
