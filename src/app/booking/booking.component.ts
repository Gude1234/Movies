import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieListService } from '../Services/movie-list.service';
import { TheatredetailService } from '../Services/theatredetail.service';

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
  constructor(private route:ActivatedRoute, private router:Router, private movieList:MovieListService, private theatreList:TheatredetailService){}

  ngOnInit(): void {
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
  }
}
