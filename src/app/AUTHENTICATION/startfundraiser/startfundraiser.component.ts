import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { StartfundraiserService } from 'src/app/SERVICES/Auth-service/startfundraiser.service';
//import { maxNumberCountValidator, maxWordCountValidator } from './custom.validator';




@Component({
  selector: 'app-startfundraiser',
  templateUrl: './startfundraiser.component.html',
  styleUrls: ['./startfundraiser.component.css']
})
export class StartfundraiserComponent implements OnInit  {
 
 //FirstFormGroup:FormGroup
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  imageFile: any;
  existingImage: any;
  ngOnInit():void{
  

  }

  

  constructor(private _formBuilder: FormBuilder, private startfundraiserservice:StartfundraiserService) {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', [Validators.required]],
      brief:['',[Validators.required]],
      // idNumber:['',  Validators.required],
      county:['',  Validators.required],
      subCounty:['',  Validators.required],
      amount:['',  Validators.required],
      endDate:['',  Validators.required],



      // title: ['', [Validators.required, maxWordCountValidator(20)]],
      // brief: ['', [Validators.required, maxWordCountValidator(50)]],
      // idno: ['', [Validators.required, maxNumberCountValidator(8)]],
    
    });
    this.secondFormGroup = this._formBuilder.group({
      image: [null, Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      facebook:['', Validators.required],
      twitter: ['', Validators.required]
    });
  }

  submitForm(){
    console.log(this.firstFormGroup.value, this.secondFormGroup.value,this.thirdFormGroup.value);
    if(this.firstFormGroup.invalid && this.secondFormGroup.invalid && this.thirdFormGroup.invalid){
      alert("the data in the form is invalid. Please fill out the required fields");
      return;
    }


    let data = 
  {
    "title": this.firstFormGroup.controls['title'].value,
    "brief": this.firstFormGroup.controls['brief'].value,
    // "idNumber": this.firstFormGroup.controls['idNumber'].value,
    "county": this.firstFormGroup.controls['county'].value,
    "subcounty": this.firstFormGroup.controls['subCounty'].value,
    "amount": this.firstFormGroup.controls['amount'].value,
    "endDate": this.firstFormGroup.controls['endDate'].value,
    "image": this.secondFormGroup.controls['image'].value,
    "email": this.thirdFormGroup.controls['email'].value,
    "phone": this.thirdFormGroup.controls['phone'].value,
    "facebook": this.thirdFormGroup.controls['facebook'].value,
    "twitter": this.thirdFormGroup.controls['twitter'].value,
    
    
  }

  const formData = new FormData();
  if(this.imageFile){
    formData.append('file', this.imageFile, this.imageFile.name);

  }
  const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
  formData.append('data',blob);

  this.startfundraiserservice.Startfundraiser(formData).subscribe(resp => {
    console.log(resp);

  }, 
  (error) =>{
    console.error('Signup error:', error);
  })

 
  }

  onImageChange(event: any){
    console.log(event.target.file[0])
    this.imageFile = event.target.files[0];



    if (/\.(jpe?g|png|gif|pdf)$/i.test(event.name)){
      this.imageFile = event.target.files;
      if(this.imageFile instanceof Blob || this.imageFile instanceof File){
        const reader = new FileReader();
        reader.onload = (e: any) =>{
          this.existingImage = e.target?.result;
        };
        reader.readAsDataURL(this.imageFile);
      }
      else{
        console.error('Invalid file type. Please selected a valid file');
      }


    }
   } 
  

  



}
