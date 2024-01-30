import { Component, Input, OnInit } from '@angular/core';
import { MovieListService } from 'src/app/Services/movie-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent{
  @Input() movie:any
  @Input() Index:number
}
