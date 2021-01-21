import { PostService } from './../services/post.service';
/**
 * Created by david on 4/23/20.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from "../services/base.service";

@Injectable()
export class BlogResolve implements Resolve<any> {
    constructor(private postservice: PostService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.postservice.getPost();
    }
}

