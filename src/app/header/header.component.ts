import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  user:any
  login = false
  register = false
  showDropdown = false

  constructor(private route:ActivatedRoute, private router:Router, private userService:UserService){
  }

  ngOnInit(): void {
    this.user = this.userService.loginuser
  }

  onLogin(){
    this.router.navigate(['/login'])
  }

  onUser(){
    this.showDropdown = !this.showDropdown
  }

  onLogout(){
  }


}
