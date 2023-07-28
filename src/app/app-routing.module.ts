import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { LoginComponent } from './AUTHENTICATION/login/login.component';
import { DonationsComponent } from './PAGES/donations/donations.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { CartComponent } from './PAGES/cart/cart.component';
import { DashboardComponent } from './PAGES/dashboard/dashboard.component';
import { StartfundraiserComponent } from './AUTHENTICATION/startfundraiser/startfundraiser.component';
import { LogoutComponent } from './AUTHENTICATION/logout/logout.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'donate', component: DonationsComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'cart', component:CartComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'startfundraiser', component: StartfundraiserComponent},
  {path: 'logout', component: LogoutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
