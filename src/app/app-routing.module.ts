import { BlogDetailsResolve } from './resolvers/blogdetails.resolver';
import { PostComponent } from './pages/blog/post/post.component';
import { BlogResolve } from './resolvers/blog.resolver';
import { BlogComponent } from './pages/blog/blog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailsResolve} from "./resolvers/product.resolver";
import {CartComponent} from "./pages/cart/cart.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {CheckOutGuard} from "./guards/checkout.guard";
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path:'', component: HomeComponent},

  {path: 'product/:id',
    component:ProductsComponent,
    resolve : { relateDetails : ProductDetailsResolve},
  },
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate:[CheckOutGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'blog', component: BlogComponent,
    resolve: {blogdetails: BlogResolve}
  },
  {
    path: 'blog/:id', component: PostComponent,
    resolve: {details: BlogDetailsResolve}
  },

// otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
