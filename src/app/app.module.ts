import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CouponComponent } from './shared/coupon/coupon.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BookingComponent } from './booking/booking.component';
import { TheatredetailsComponent } from './booking/theatredetails/theatredetails.component';
import { SeatingComponent } from './booking/seating/seating.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { OrdersummaryComponent } from './payment/ordersummary/ordersummary.component';
import { PopupComponent } from './shared/popup/popup.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccesfulComponent } from './succesful/succesful.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    CouponComponent,
    MovieDetailComponent,
    BookingComponent,
    TheatredetailsComponent,
    SeatingComponent,
    BookingConfirmationComponent,
    PaymentComponent,
    OrdersummaryComponent,
    PopupComponent,
    LoginComponent,
    RegisterComponent,
    SuccesfulComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
