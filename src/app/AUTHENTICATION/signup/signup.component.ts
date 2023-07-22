import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signupinterface } from 'src/app/INTERFACES/signupinterface';
import { SignupserviceService } from 'src/app/SERVICES/Auth-service/signupservice.service';

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


  constructor(private Fbuilder: FormBuilder, private signupservice: SignupserviceService) {

    this.signupForm = this.Fbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      image: [null, Validators.required]
    })
  }



  formSubmit() {
    if (this.signupForm.invalid) {
      alert("The data in the form is invalid.Please fill out the required fields");
      return;
    }
    const formData = new FormData();
    
    //iterate over the form controls and append their values to formData
    Object.keys(this.signupForm.controls).forEach(key => {
      const control = this.signupForm.get(key);
      if (control) {
        formData.append(key, control.value)
      }
    });

    if (this.imageFile) {
      formData.append('file', this.imageFile, this.imageFile.name);
    }


    this.signupservice.Signup(formData).subscribe(resp => {
      console.log("signup Successful", resp);


    },
      (error) => {
        // Handle any errors that occurred during the HTTP request
        console.error('Signup error:', error);
      })

  }
 
  onImageChange(event: any) {
    //check if the files were selected
    if (/\.(jpe?g|png|gif|pdf)$/i.test(event.name)) {
      // Get the selected file

      this.imageFile = event.target.files ;
      if (this.imageFile instanceof Blob || this.imageFile instanceof File) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.existingImage = e.target?.result; // Assign the image source to 'existingImage'
        };
        reader.readAsDataURL(this.imageFile);
      }
      else {
        console.error('Invalid file type. Please select a valid file.');
      }
    }






    //this enables us to read the contents of the file




    // }


    //})
  }
}
