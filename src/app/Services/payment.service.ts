import { Injectable } from '@angular/core';
import { UPI } from '../shared/upi.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  UpiOptions: UPI[] = [
    new UPI('Google Pay','https://assets-in.bmscdn.com/paymentcms/gpay.jpg'),
    new UPI('Amazon Pay','https://assets-in.bmscdn.com/paymentcms/Amazonpay.png'),
    new UPI('PhonePe','https://assets-in.bmscdn.com/paymentcms/phonepe_web.png'),
    new UPI('BHIM','https://assets-in.bmscdn.com/paymentcms/bhim_web.png'),
    new UPI('Paytm','https://assets-in.bmscdn.com/paymentcms/paytmupi_web.png')
  ]

  constructor(private http:HttpClient) { }

  getBookings(){
    return this.http.get('http://localhost:5258/api/Booking')
  }

  createBooking(data:any){
    return this.http.post('http://localhost:5258/api/Booking', data)
  }

}
