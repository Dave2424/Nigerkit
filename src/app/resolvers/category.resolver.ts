/**
 * Created by david on 4/23/20.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from "../services/base.service";

@Injectable()
export class CategoryProductResolve implements Resolve<any> {
    constructor(private baseService: BaseService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.baseService.getProductByCategory(route.params.slug);
    }
}

