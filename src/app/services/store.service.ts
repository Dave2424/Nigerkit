import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import * as _ from 'lodash';
import { AuthenticationService } from './authentication.service';
import {User} from "../models/user";

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	constructor(
		private http: HttpClient,
		private authenticationService : AuthenticationService) { }


	endpoint = this.authenticationService.endpoint;


	public getCommonData(url:string){
		return this.http.get(`${this.endpoint}/store/${url}`);
	}

	//======================= Methods Starts Here ==========================//

	public getStore(user_id: number, url:string){
		return this.http.get(`${this.endpoint}/store/${url}/${user_id}`);
	}

	public checkHasStore(user_id: number){
		return this.http.get(`${this.endpoint}/store/check-has-store/${user_id}`);
	}

	public dashboardData(user_id:number){
		return this.http.get(`${this.endpoint}/store/get-dashboard-data/${user_id}`);
	}

	public getOrders(user_id:number){
		return this.http.get(`${this.endpoint}/store/get-store-orders/${user_id}`);
	}

	public getReviews(user_id:number){
		return this.http.get(`${this.endpoint}/store/get-reviews/${user_id}`);
	}

	public trackOrder(order_id:number, user_id){
		return this.http.get(`${this.endpoint}/store/track-order/${order_id}/${user_id}`);
	}

	public getSingleProduct(product_id:number){
		return this.http.get(`${this.endpoint}/store/get-single-product/${product_id}`).pipe(delay(800));
	}

	////////////////////////////////////////////////////////////////////////////


	public GetCartItems(user_id: number){
		return this.http.get(`${this.endpoint}/store/store-get-cart/${user_id}`);
	}

	public GetTransactions(user_id:number){
		return this.http.get(`${this.endpoint}/store/store-get-transactions/${user_id}`);
	}

	public AddToCart(data:any){
		return this.http.post(`${this.endpoint}/store/store-add-to-cart`, data);
	}

	public CalculateDelivery(formData: any ) {
		return this.http.post(`${this.endpoint}/store/store-calculate-delivery`, formData);
	}
	public CalculateProduct(data: any ) {
		return this.http.post(`${this.endpoint}/store-calculate-product`, data);
	}

	public RemoveFromCart(item_id:number, user_id: number){
		return this.http.get(`${this.endpoint}/store/store-remove-from-cart/${item_id}/${user_id}`);
	}

	public PlaceOrder(formData:any){
		return this.http.post(`${this.endpoint}/store/store-place-order`, formData);
	}
	public OrderList(data: any) {
		return this.http.get(`${this.endpoint}/store/order-list/${data}`);
	}
	public OrderListRecent(client_id: any) {
		return this.http.get(`${this.endpoint}/store/order-list-recent/${client_id}`);
	}
	public OrderDetails(identifier: any) {
		return this.http.get(`${this.endpoint}/store/order-detail/${identifier}`);
	}

	// Navigation on pagination
	public Navigate(url: any) {
		return this.http.get(url);
	}
	// End navigation on pagination
}
