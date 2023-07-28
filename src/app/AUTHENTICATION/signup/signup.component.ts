import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Signupinterface } from 'src/app/INTERFACES/signupinterface';
import { SignupserviceService } from 'src/app/SERVICES/Auth-service/signupservice.service';
import { ConfirmPasswordValidator } from './password.validator';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imageFile: any;
  existingImage: any;
  signupForm: FormGroup;
  // signupData: Signupinterface;


  ngOnInit(): void {

  }


  constructor(private Fbuilder: FormBuilder, private signupservice: SignupserviceService, private router: Router) {

    this.signupForm = this.Fbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      image: [null, Validators.required]
    },

      { validator: ConfirmPasswordValidator.MatchPassword }
    );
    // this.signupForm.get('confirmPassword')?.setValidators([Validators.required, this.passwordMatchValidator()]);
  }






  formSubmit() {
    if (this.signupForm.invalid) {
      alert("The data in the form is invalid.Please fill out the required fields");
      return;
    }


    let data =
    {
      "firstName": this.signupForm.controls['firstName'].value,
      "lastName": this.signupForm.controls['lastName'].value,
      "email": this.signupForm.controls['email'].value,
      "password": this.signupForm.controls['password'].value,
    }


    const formData = new FormData();

    //iterate over the form controls and append their values to formData
    // Object.keys(this.signupForm.controls).forEach(key => {
    //   const control = this.signupForm.get(key);
    //   if (control) {
    //     formData.append(key, control.value)
    //   }
    // });

    if (this.imageFile) {
      formData.append('file', this.imageFile, this.imageFile.name);
    }
    // console.log(this.imageFile);
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    formData.append('data', blob);



    this.signupservice.Signup(formData).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 409) {
          // Handle the conflict error, e.g., show a message to the user
          alert('User already exists or conflicting data.');
        } else {
          // Handle other errors if needed
          console.error('Signup error:', error);
        }
        // Pass the error along to the calling code
        return throwError(error);
      })
    ).subscribe(resp => {
      console.log(resp);
      // alert("signup Successful");
      this.router.navigate(['login']);



    },
      (error) => {
        // Handle any errors that occurred during the HTTP request
        console.error('Signup error:', error);
      })

  }

  onImageChange(event: any) {
    //check if the files were selected
    console.log(event.target.files[0])
    this.imageFile = event.target.files[0]
    if (/\.(jpe?g|png|gif|pdf)$/i.test(event.name)) {
      // Get the selected file
      this.imageFile = event.target.files;
      if (this.imageFile instanceof Blob || this.imageFile instanceof File) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.existingImage = e.target?.result; // Assign the image source to 'existingImage'. previewing the image
        };
        reader.readAsDataURL(this.imageFile);
      }
      else {
        console.error('Invalid file type. Please select a valid file.');
      }
    }


  }
}
