import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import * as _ from 'lodash';
import { AuthenticationService } from './authentication.service';
import { User } from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) { }


  endpoint = this.authenticationService.endpoint;

  // ======================= Methods Starts Here ==========================//

  public getPost() {
    return this.http.get(`${this.endpoint}/post/get-all-post`);
  }
  public getPostDetails(slug) {
    return this.http.get(`${this.endpoint}/post/get-post-details/${slug}`);
  }
  public sendComment(formData: any) {
    return this.http.post(`${this.endpoint}/post/send-comment`, formData);
  }
  
  // Navigation on pagination
  public Navigate(url: any) {
    return this.http.get(url);
  }
	// End navigation on pagination

}