import { Component, OnInit} from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Logininterface } from 'src/app/INTERFACES/signupinterface';
import { LoginserviceService } from 'src/app/SERVICES/Auth-service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  loginForm: FormGroup;

  ngOnInit(): void {
    
      
  }

  constructor(private Fbuilder: FormBuilder,  private router: Router, private loginservice:LoginserviceService){

    this.loginForm = this.Fbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password :['',[Validators.required]]
    })

  }

 


  formSubmit(){
    if (this.loginForm.valid) {
      const credentials: Logininterface = this.loginForm.value;
      this.loginservice.login(credentials).subscribe(
        (response) => {
          // Handle successful login response here, e.g., store user data, navigate to a new page, etc.
          alert('Login successful');
          this.router.navigate(['dashboard']);

          // Example navigation to a different page after successful login
          // this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Handle error response here, e.g., show an error message to the user
          alert('invalid email or password');
        }
      );
    }
    
    // this.loginservice.login(this.loginForm).subscribe()
    // console.log(this.loginForm.value);
  }

 

}
