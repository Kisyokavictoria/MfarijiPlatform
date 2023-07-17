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
import { UploadimageComponent } from './AUTHENTICATION/uploadimage/uploadimage.component';
import { ContactdetailsComponent } from './AUTHENTICATION/contactdetails/contactdetails.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'donate', component: DonationsComponent},
  {path: 'about', component:AboutusComponent},
  {path: 'cart', component:CartComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'startfundreaiser', component: StartfundraiserComponent},
  {path: 'uploadimg', component: UploadimageComponent},
  {path: 'contactdet', component: ContactdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
