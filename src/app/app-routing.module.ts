import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { LoginComponent } from './AUTHENTICATION/login/login.component';
import { DonationsComponent } from './PAGES/donations/donations.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { CartComponent } from './PAGES/cart/cart.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'donate', component: DonationsComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
