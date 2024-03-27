import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { NgModule } from "@angular/core";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { BookingComponent } from "./booking/booking.component";
import { SeatingComponent } from "./booking/seating/seating.component";
import { BookingConfirmationComponent } from "./booking-confirmation/booking-confirmation.component";
import { PaymentComponent } from "./payment/payment.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SuccesfulComponent } from "./succesful/succesful.component";

const routes:Routes = [
    {path:"", component:MoviesComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:":id", component:MovieDetailComponent},
    {path:":id/booking", component:BookingComponent},
    {path:":id/booking/seating", component:SeatingComponent},
    {path:":id/booking/seating/confirmation", component:BookingConfirmationComponent},
    {path:":id/booking/seating/confirmation/payment", component:PaymentComponent},
    {path:":id/booking/seating/confirmation/payment/succesful", component:SuccesfulComponent}    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}