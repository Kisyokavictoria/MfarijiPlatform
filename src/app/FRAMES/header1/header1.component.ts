import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/SERVICES/cart/cart.service';



@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component  implements OnInit{
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

   ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  

}
