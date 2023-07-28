import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartfundraiserService {

  constructor(private http:HttpClient) { }

  Startfundraiser(formData:FormData):Observable <any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    //the post request takes 2 arguements the endpointURL and the body(the data being sent to the endpoint)
    // return this.http.post('10.20.33.120:9090/api/v1/personregister', formData, {headers});
    return this.http.post('http://10.20.33.120:9090/api/v1/createprofile', formData, {headers})
  
  }
}
