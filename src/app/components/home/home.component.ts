import { CartService } from './../../services/cart.service';
import { GoodsService } from './../../services/goods.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/interfaces/good';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = [];
  goodsObservable: Subscription;
  add: number = -1;
  constructor(public gs: GoodsService, public cs: CartService, public as: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
    this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data() as {}
        } 
      })
    });
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe();
  }
  addToCart(index: number) {
    if(this.as.userId) {
      this.add = +index;
    }
    else {
      this.router.navigate(['/login']);
    }
      
  }
  
  buy(amount: number) {
    let selectedGood = this.goods[this.add];
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    }

    this.cs.addToCart(data).then(() => this.add = -1);
  }

}
