import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BehaviorSubject, EMPTY, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private cartItemSubject: BehaviorSubject<[]>;
  public cartItem: Observable<[]>;
  private _cartSource = new Subject<any>();
  cartItems$ = this._cartSource.asObservable();
  public EMPTY = new Object();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("current_user"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
    // console.log(this.currentUser);
  }

  // Local

  public endpoint = "http://127.0.0.1:8000/api";
  public baseurl = "http://127.0.0.1:8000/";
  public endPointAuth = "http://127.0.0.1:8000/api/auth";

  // Online
  // public endpoint = 'https://server.nigerkit.com/api';
  // public baseurl = 'https://server.nigerkit.com/';
  // public endPointAuth = 'https://server.nigerkit.com/api/auth';

  private iss = {
    login: `${this.endPointAuth}/login`,
    register: `${this.endPointAuth}/register`,
  };

  // Login user
  login(email: string, password: string) {
    return this.http.post<any>(`${this.endPointAuth}/login`, {
      email,
      password,
    });
  }

  // Register a new user
  public createUser(formData: any) {
    return this.http.post<any>(`${this.endPointAuth}/register`, formData);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getToken() {
    return localStorage.getItem("Access_token");
  }

  // setUser
  setUser(user) {
    localStorage.setItem("current_user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  public get currentCartItem() {
    return this.cartItemSubject.value;
  }
  setCartItems(items) {
    this._cartSource.next(items);
  }
  // set basic user data
  setUserData(data) {
    localStorage.setItem("user_Data", JSON.stringify(data));
  }

  setCart(items) {
    localStorage.setItem("cart_Items", JSON.stringify(items));
  }
  removeCartItem() {
    localStorage.removeItem("cart_Items");
  }
  // Set access token
  setToken(token) {
    localStorage.setItem("Access_token", token);
  }

  removeUser() {
    return localStorage.removeItem("current_user");
  }

  //get user data from storage
  getUserData() {
    return localStorage.getItem("user_Data");
  }

  //remove user data from storage
  removeUserData() {
    return localStorage.removeItem("user_Data");
  }
  removeToken() {
    return localStorage.removeItem("Access_token");
  }

  //handle token
  handleToken(token) {
    this.setToken(token);
  }

  isValidToken() {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);

      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }

    return false;
  }
  payload(token) {
    const payload = token.split(".")[1];

    return this.decode(payload);
  }
  decode(payload) {
    return JSON.parse(atob(payload));
  }
  loggedIn() {
    return this.isValidToken();
  }

  logout() {
    // remove user from local storage to log user out
    this.removeUser();
    this.removeUserData();
    // remove access_token
    this.removeToken();
    this.setCartItems([]);
  }
}
