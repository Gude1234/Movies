import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user ={
    "email":"",
    "password":""
  }

  users:any

  @Output() cancel = new EventEmitter<void>();
  @Output() register = new EventEmitter<void>();
  @Output() Auth = new EventEmitter<void>();

  constructor(private router:Router, private userService:UserService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response
    })
  }

  Authentication(){
    for(let i =1 ; i<=this.users.length ; i++){
      this.userService.getUser(i).subscribe(response => {
        if(this.user.email === response['email'] && this.user.password === response['password']){
          this.userService.loginuser = response
          this.router.navigate(['/'])
        }
      })
    }
  }

  onRegister(){
    this.router.navigate(['/register'])
  }

  onCancel(){
    this.router.navigate(['/'])
  }

}
