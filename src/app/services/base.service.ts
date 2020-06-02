import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {AuthenticationService} from "./authentication.service";
import {debounceTime} from "rxjs/internal/operators";

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

  //Google Api Calls
  public googleSearchPlaces( query:any ){
    return this.http.post(`${this.endpoint}/address-search-places`, {query: query}).pipe(debounceTime(8000));
  }

  // Update user profile
  public update(formData: any) {
    return this.http.post<any>(`${this.endpoint}/update`, formData);
  }
  public updateUserData(formData: any, id: number) {
    return this.http.post<any>(`${this.endpoint}/update-password-data/${id}`, formData);
  }

  public all_product(){
    return this.http.get(`${this.endpoint}/get-product`);
  }
  public allCategory() {
    return this.http.get(`${this.endpoint}/get-category`);
  }
  public banner() {
    return this.http.get(`${this.endpoint}/get-banner`);
  }
  public banner_sr() {
    return this.http.get(`${this.endpoint}/get-banner_sr`);
  }
  public product_details(id) {
    return this.http.get(`${this.endpoint}/get-product-related-details/${id}`);
  }
  public get_skuNos() {
    return this.http.get(`${this.endpoint}/get-sku_No`);
  } 
  public vatFee() {
    return this.http.get(`${this.endpoint}/vatfee`);
  }

}
