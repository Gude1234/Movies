import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../Services/movie-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  id:number
  movie:any
  backgroundurl:String;
  languages: string[]
  selected = false
  constructor(private movieList: MovieListService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id']
      this.movieList.GetMovieById(this.id + 1).subscribe(response =>{
        this.movie = response
        this.backgroundurl = this.movie['backgroundImage']
        this.languages = this.movie['languages'].split(',')
      })
    })
  }

  onBooking(){
    if(this.languages.length === 1){
      this.movieList.languageselected = this.movie['languages']
      this.router.navigate(['booking'], {relativeTo:this.route})
    }
    else{
      this.selected = true
    }
  }

  someMethod(value:string){
    this.movieList.languageselected = value;
    this.router.navigate(['booking'], {relativeTo:this.route})
    console.log(value)
  }

  onRating(){}

}
