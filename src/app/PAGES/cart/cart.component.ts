import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CartService } from 'src/app/SERVICES/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    // this.fundraisers = this.cartService.getItems();
  
  }

  // fundraisers = this.cartService.getItems();

  // clearCart(): void {
  //   this.cartService.clearCart();
  //   this.fundraisers = []
  //   console.log('Cart cleared');
  // }


  //   removeItem(itemId ?: number): void {
  //     if(itemId) {
  //       this.cartService.removeItem(itemId);
  //     }

  //   }
  //   constructor(private cartService: CartService){ }


    cart = [
      {Image: '/assets/images/w1.png',content: 'Help rebuild myself' },
      {Image: '/assets/images/w2.png',heading: 'Help rebuild myself'},
      {Image: '/assets/images/w3.png',heading: 'Help rebuild myself'}
    ]




  }
