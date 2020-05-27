import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsResolve} from "./resolvers/product.resolver";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CheckOutGuard} from "./guards/checkout.guard";
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', component: HomeComponent},

  {path: 'product/:id',
    component:ProductsComponent,
    resolve : { relateDetails : ProductDetailsResolve},
  },
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate:[CheckOutGuard]},
  {path: 'signup', component: SignupComponent},

// otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
