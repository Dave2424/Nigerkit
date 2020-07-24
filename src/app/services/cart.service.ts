import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private _cartSource = new Subject<any>();
    cartItems$ = this._cartSource.asObservable();


    SendCart(items: any) {
        this._cartSource.next(items);
    }

}