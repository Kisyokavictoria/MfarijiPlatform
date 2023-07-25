import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
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
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });
    
    // this.thirdFormGroup = this._formBuilder.group({
    //   thirdCtrl: ['', Validators.required]
    // })

  //  this. thirdFormGroup = this._formBuilder.group({
  //     thirdCtrl: ['', Validators.required],
  //   });
  

  }

  // constructor(private router: Router){}

  // navigateToPage(){
  //   this.router.navigate(['/uploadimg'])
  // }

  

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      // title: ['', [Validators.required, maxWordCountValidator(20)]],
      // brief: ['', [Validators.required, maxWordCountValidator(50)]],
      // idno: ['', [Validators.required, maxNumberCountValidator(8)]],
    
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  


}
