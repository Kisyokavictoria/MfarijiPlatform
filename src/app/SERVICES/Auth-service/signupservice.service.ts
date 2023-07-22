import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signupinterface } from 'src/app/INTERFACES/signupinterface';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  // private signupurl = ' http://localhost:3000/signup'


  constructor(private http: HttpClient) { }

Signup(formData:FormData):Observable <any> {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  //the post request takes 2 arguements the endpointURL and the body(the data being sent to the endpoint)
  return this.http.post('http://localhost:3000/signup', formData, {headers})
}

 
  
  // Signup(): Observable<any> {
  // // Signup(signupform: Signupinterface): Observable<any> {
  //   // return this.http.post('192.168.137.228:9090/api/v1/widowRegister',
  //   //   { id: 1 })
  //   return this.http.get('https://fakestoreapi.com/products',)
    

 // }









}

