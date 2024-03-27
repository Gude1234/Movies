import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginuser:any

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:5258/api/Users')
  }

  getUser(id:number){
    return this.http.get(`http://localhost:5258/api/Users/${id}`)
  }

  postUser(user:any){
    return this.http.post('http://localhost:5258/api/Users', user)
  }
}
