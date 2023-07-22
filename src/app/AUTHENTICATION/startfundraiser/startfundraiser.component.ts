import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-startfundraiser',
  templateUrl: './startfundraiser.component.html',
  styleUrls: ['./startfundraiser.component.css']
})
export class StartfundraiserComponent {

  // constructor(private router: Router){}

  // navigateToPage(){
  //   this.router.navigate(['/uploadimg'])
  // }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}


}
