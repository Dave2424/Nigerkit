import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import {AuthenticationService} from "./authentication.service";
// import { User } from '../_models';
// import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient,
                private authenticationservice: AuthenticationService) { }

  //get emdpoints
  endpoint = this.authenticationservice.endpoint;
  endPointAuth = this.authenticationservice.endPointAuth;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : 'allow'
    })
  };

  public all_product(){
    return this.http.get(`${this.endpoint}/get-product`);
    // return 'hello';
  }
}
