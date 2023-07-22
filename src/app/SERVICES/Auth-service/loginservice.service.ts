import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logininterface } from 'src/app/INTERFACES/signupinterface';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
}
