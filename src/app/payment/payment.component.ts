import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../Services/movie-list.service';
import { ConfirmationService } from '../Services/confirmation.service';
import { SeatingService } from '../Services/seating.service';
import { TheatredetailService } from '../Services/theatredetail.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  movie:any
  theatre:any
  seats =[]
  amount:number
  id:number
  time:string
  UpiOptions = []
  paymentOption = 'Credit';
  upiOption:any

  ticket = {
    "id":0,
    "email" : "",
    "number": "",
    "moviename": "",
    "language": "",
    "seats":[],
    "theatreName":"",
    "time":"",
    "amount":0
  }

  constructor(private movielist:MovieListService,private confirm:ConfirmationService,private seatservice:SeatingService,private theatredeatail:TheatredetailService, private route:ActivatedRoute, private router:Router,private payment:PaymentService){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']
      this.movielist.GetMovieById(this.id+1).subscribe(response =>{
        this.movie = response
      })
    })
    this.theatre = this.theatredeatail.theatre
    this.time = this.theatredeatail.time
    this.seats = this.seatservice.selectedSeats
    this.amount = this.confirm.amount
    for(let option of this.payment.UpiOptions){
      this.UpiOptions.push(option)
    }
    this.ticket.moviename = this.movie['name']
    this.ticket.language = this.movie['languages']
    for(let seat of this.seats){
      this.ticket.seats.push(seat['row'])
    }
    this.ticket.theatreName = this.theatre['name']
    this.ticket.amount = this.amount
    this.ticket.time = this.time
  }

  onCredit(){
    this.paymentOption = 'Credit'
  }

  onUpi(){
    this.paymentOption = 'UPI'
    console.log(this.ticket.seats)
  }

  onUpiOption(i:number){
    this.upiOption = this.UpiOptions[i]
    this.paymentOption = this.UpiOptions[i]['name']
  }
  
  onBack(){
    this.paymentOption = 'UPI'
  }

  onPayment(){
    
  }
}
