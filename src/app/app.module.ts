import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './FRAMES/footer/footer.component';
import { HeaderComponent } from './FRAMES/header/header.component';
import { LoginComponent } from './AUTHENTICATION/login/login.component';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { DonationsComponent } from './PAGES/donations/donations.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';
import { CartComponent } from './PAGES/cart/cart.component';
import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './PAGES/dashboard/dashboard.component';
import { StartfundraiserComponent } from './AUTHENTICATION/startfundraiser/startfundraiser.component';
import { UploadimageComponent } from './AUTHENTICATION/uploadimage/uploadimage.component';
import { ContactdetailsComponent } from './AUTHENTICATION/contactdetails/contactdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    DonationsComponent,
    AboutusComponent,
    CartComponent,
    DashboardComponent,
    StartfundraiserComponent,
    UploadimageComponent,
    ContactdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
