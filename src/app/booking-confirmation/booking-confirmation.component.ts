import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../Services/movie-list.service';
import { TheatredetailService } from '../Services/theatredetail.service';
import { SeatingService } from '../Services/seating.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationService } from '../Services/confirmation.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit{

  movie:any
  theatre:any
  seats =[]
  id:number
  time:any
  price:number
  conveniencefee = 66.08
  subtotal:number
  contribute = true
  amount:number

  constructor(private movielist:MovieListService,private confirm: ConfirmationService,private theatredeatail:TheatredetailService, private seatservce:SeatingService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']
      this.movielist.GetMovieById(this.id+1).subscribe(response => {
        this.movie = response
      })
    })
    this.theatre = this.theatredeatail.theatre
    this.time = this.theatredeatail.time
    this.seats = this.seatservce.selectedSeats
    this.price = this.seatservce.price
    this.subtotal = this.price+this.conveniencefee
    this.amount = this.subtotal+this.seats.length
    this.confirm.amount = this.amount
  }

  onContribute(){
    this.contribute = !this.contribute
    if(this.contribute){
      this.amount = this.subtotal+this.seats.length
    }
    else{
      this.amount = this.subtotal
    }
    this.confirm.amount = this.amount
  }

  onProceed(){
    this.router.navigate(['payment'],{relativeTo:this.route})
  }
}
