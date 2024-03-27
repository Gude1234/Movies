import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user ={
    "id":0,
    "name":"",
    "email":"",
    "password":"",
    "phoneNumber":""
  }

  users:any

  @Output() cancel1 = new EventEmitter<void>();
  @Output() login = new EventEmitter<void>();

  constructor(private router:Router, private userService:UserService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response
    })
    console.log(this.users)
  }

  CreateUser(){
    this.userService.postUser(this.user).subscribe(response => {
      this.router.navigate(['/login'])
    })
  }

  onLogin(){
    this.router.navigate(['/login'])
  }

  onCancel(){
    this.router.navigate(['/'])
  }
}
