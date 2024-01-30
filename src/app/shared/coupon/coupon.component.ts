import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/Services/coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit{

  coupons:any

  constructor(private couponService:CouponService){}

  ngOnInit(): void {
    this.couponService.GetCoupons().subscribe(response =>{
      this.coupons = response;
    })
  }

}
