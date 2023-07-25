import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logininterface } from 'src/app/INTERFACES/signupinterface';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }

  login(Login:Logininterface): Observable<any>{
    return this.http.post('http://10.20.33.120:9090/api/v1/personlogin',Login);
  }
}
