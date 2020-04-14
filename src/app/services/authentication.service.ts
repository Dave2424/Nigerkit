import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

    //Local
    public endpoint = 'http://nigerkit.test//api';
    public baseurl = 'http://nigerkit.test/';
    public endPointAuth = 'http://nigerkit.test//api/auth';



    // Login user
    // login(email: string, password: string) {
    //     return this.http.post<any>(`${this.endPointAuth}/login`, { email, password });
    // }
    //
    // Register a new user
    public createUser(formData: any){
        return this.http.post<any>(`${this.endPointAuth}/register`, formData);
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getToken(){
        return localStorage.getItem('access_token');
    }
}
