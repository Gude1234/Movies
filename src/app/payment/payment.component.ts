import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../Services/movie-list.service';
import { ConfirmationService } from '../Services/confirmation.service';
import { SeatingService } from '../Services/seating.service';
import { TheatredetailService } from '../Services/theatredetail.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaymentService } from '../Services/payment.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  movie:any
  id:number
  UpiOptions = []
  paymentOption = 'Credit';
  upiOption:any
  day:string

  ticket = {
    "id":0,
    "email" : "",
    "number": "",
    "movieName": "",
    "language": "",
    "seats":[],
    "theatreName":"",
    "time":"",
    "date":"",
    "amount":0
  }

  constructor(private movielist:MovieListService,private confirm:ConfirmationService,private seatservice:SeatingService,private theatredeatail:TheatredetailService, private route:ActivatedRoute, private router:Router,private payment:PaymentService,private userService:UserService){}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']
      this.movielist.GetMovieById(this.id+1).subscribe(response =>{
        this.movie = response
        this.ticket.movieName = response['name']
      })
    })
    for(let option of this.payment.UpiOptions){
      this.UpiOptions.push(option)
    }
    this.ticket.seats = this.seatservice.selectedSeats
    this.ticket.language = this.movielist.languageselected
    this.ticket.theatreName = this.theatredeatail.theatre['name']
    this.ticket.amount = this.confirm.amount
    this.ticket.time = this.theatredeatail.time
    this.ticket.email = this.userService.loginuser['email']
    this.ticket.number = this.userService.loginuser['phoneNumber']
  }

  onCredit(){
    this.paymentOption = 'Credit'
  }

  onUpi(){
    this.paymentOption = 'UPI'
    console.log(this.ticket)
  }

  onUpiOption(i:number){
    this.upiOption = this.UpiOptions[i]
    this.paymentOption = this.UpiOptions[i]['name']
  }
  
  onBack(){
    this.paymentOption = 'UPI'
  }

  onPayment(){
    this.payment.createBooking(this.ticket).subscribe(response =>{
      this.router.navigate(['succesful'],{relativeTo:this.route})
    })
  }
}
