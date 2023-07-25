import { Component, OnInit} from '@angular/core';
import{FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  ngOnInit(): void {
      
  }

  constructor(private Fbuilder: FormBuilder,  private router: Router){

  }

  loginForm = this.Fbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password :['',[Validators.required]]
  })


  formSubmit(){
    console.log(this.loginForm.value);
  }

  navigateToSignup(){
      this.router.navigate(['/signup'])
  }

}
