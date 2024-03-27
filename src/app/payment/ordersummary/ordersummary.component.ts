import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfirmationService } from 'src/app/Services/confirmation.service';
import { MovieListService } from 'src/app/Services/movie-list.service';
import { SeatingService } from 'src/app/Services/seating.service';
import { TheatredetailService } from 'src/app/Services/theatredetail.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit{

  movie:any
  theatre:any
  seats= []
  time:string
  amount:number
  id:number
  language:string
  date:Date
  days:any
  months:any

  constructor(private movielist:MovieListService,private confirm: ConfirmationService, private theatredetail:TheatredetailService,private seatservice:SeatingService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']
      this.movielist.GetMovieById(this.id+1).subscribe(response => {
        this.movie = response
      })
    })
    this.days = this.theatredetail.days
    this.months = this.theatredetail.months
    this.date = this.theatredetail.date
    this.amount = this.confirm.amount
    this.theatre = this.theatredetail.theatre
    this.time = this.theatredetail.time
    this.seats = this.seatservice.selectedSeats
    this.language = this.movielist.languageselected
  }

}
