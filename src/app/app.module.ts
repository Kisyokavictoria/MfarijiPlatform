import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './FRAMES/footer/footer.component';
import { HeaderComponent } from './FRAMES/header-dash/header.component';
import { LoginComponent } from './AUTHENTICATION/login/login.component';
import { SignupComponent } from './AUTHENTICATION/signup/signup.component';
import { HomepageComponent } from './PAGES/homepage/homepage.component';
import { DonationsComponent } from './PAGES/donations/donations.component';
import { AboutusComponent } from './PAGES/aboutus/aboutus.component';
import { CartComponent } from './PAGES/cart/cart.component';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './PAGES/dashboard/dashboard.component';
import { StartfundraiserComponent } from './AUTHENTICATION/startfundraiser/startfundraiser.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Header1Component } from './FRAMES/header1/header1.component';
import { MatBadgeModule } from '@angular/material/badge';
import { LogoutComponent } from './AUTHENTICATION/logout/logout.component';


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
    Header1Component,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
