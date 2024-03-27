import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieListService } from '../Services/movie-list.service';
import { TheatredetailService } from '../Services/theatredetail.service';
import { range } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  movie:any
  id:number
  theatres: any
  language:string
  today:Date
  lastdate:any

  days:any
  months:any
  dates =[]

  Selected = 0
  
  constructor(private route:ActivatedRoute, private router:Router, private movieList:MovieListService, private theatreList:TheatredetailService){}

  ngOnInit(): void {
    this.days = this.theatreList.days
    this.months = this.theatreList.months
    this.today = new Date()
    this.lastdate = new Date(this.today.getFullYear(), this.today.getMonth()+1,0)
    this.route.params.subscribe((params:Params) =>{
      this.id = +params['id'];
      this.movieList.GetMovieById(this.id+1).subscribe(response =>{
        this.movie =response;
      })
    })
    this.theatreList.GetTheatreDetails().subscribe(response =>{
      this.theatres = response
    })
    this.language = this.movieList.languageselected
    this.generateDateRange(this.today,this.lastdate)
    this.theatreList.date = this.today
  }

  generateDateRange(startDate: Date, endDate: Date){
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      this.dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  onSelect(i:number){
    this.theatreList.date = this.dates[i]
    this.Selected = i
  }
}
