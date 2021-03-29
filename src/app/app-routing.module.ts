import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent, data: {index: 0}},
  {path: 'login', component: LoginComponent, data: {index: 3}},
  {path: 'signup', component: SignupComponent, data: {index: 4}},
  {path: 'cart', component: CartComponent , data: {index: 1}},
  {path: 'admin', component: GoodsComponent, data: {index: 2}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
