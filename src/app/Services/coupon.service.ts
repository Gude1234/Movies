import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http:HttpClient) { }

  GetCoupons(){
    return this.http.get('http://localhost:5258/api/Coupons')
  }
}
