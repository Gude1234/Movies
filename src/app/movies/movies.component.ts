import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../Services/movie-list.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  constructor(private movielistservice: MovieListService, private userService:UserService){}

  movies: any;
  user:any

  ngOnInit() {
   this.movielistservice.GetMovies().subscribe(response => {
    this.movies = response;
   })
   this.user = this.userService.loginuser
  }
}
