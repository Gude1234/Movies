import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TheatredetailService } from 'src/app/Services/theatredetail.service';

@Component({
  selector: 'app-theatredetails',
  templateUrl: './theatredetails.component.html',
  styleUrls: ['./theatredetails.component.css']
})
export class TheatredetailsComponent {

  @Input() theatre:any

  constructor(private router:Router, private route:ActivatedRoute, private theatredetail:TheatredetailService){}

  onSeating(id:number){
    this.theatredetail.theatre = this.theatre
    this.theatredetail.time = this.theatre['timings'][id]
    console.log(this.theatredetail.time)
    this.router.navigate(['seating'], {relativeTo:this.route})
  }

}
