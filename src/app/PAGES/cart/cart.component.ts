import { Component, OnInit } from '@angular/core';
import { Subscription, subscribeOn } from 'rxjs';
import { Cartinterface } from 'src/app/INTERFACES/cartinterface';
import { CartService } from 'src/app/SERVICES/cart/cart.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  paymentForm!: FormGroup;
  focusedField: string | null = null;


  cartItems: Cartinterface[] = [];
  cartItemCount: number = 0;
  donations: Cartinterface[] = [];
  totalAmount: number = 0;



  constructor(private cartService: CartService, private Fbuilder: FormBuilder) { }
  //async waits for loaditems() to finish execution
  async ngOnInit() {
    // this.fundraisers = this.cartService.getItems();
    await this.loadItems()

    if (this.cartItems.length == 0) {
      this.cartService.loadCartItems();
    }
    //this.loadCartItems();
    this.paymentForm = this.Fbuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]]

    });

    this.donations = [
      { Image: '/assets/images/w6.png', content: 'Help rebuild myself', id: 6 },
      { Image: '/assets/images/w9.png', content: 'Help rebuild myself', id: 9 },
      { Image: '/assets/images/w7.png', content: 'Help rebuild myself', id: 7 }
    ]


    // this.updateTotalAmount();

  }



  addToCart(item: any) {
    this.cartService.addItemToCart(item);
  }

  removeFromCart(cards: any): void {
    this.cartService.removeItemFromCart(cards);
    this.cartItemCount = this.cartItems.length;
  }

  clearCart(): void {
    this.cartService.clearCart();

  }

  private loadItems(): void {
    this.cartService.getCartItems().subscribe((items: Cartinterface[]) => {

      this.cartItems = items;

      console.log(this.cartItems);
      this.cartItemCount = this.cartItems.length;



    });

  }






  // cart = [
  //   { Image: '/assets/images/w6.png', content: 'Help rebuild myself' },
  //   { Image: '/assets/images/w9.png', content: 'Help rebuild myself' },
  //   { Image: '/assets/images/w7.png', content: 'Help rebuild myself' }
  // ]

  formPayment() {
    console.log(this.paymentForm.value);
  }

  setFocusedField(fieldName: string | null) {
    this.focusedField = fieldName;
  }

  // private updateTotalAmount(): void {
  //   this.cartService.getCartItems().subscribe((cartItems) => {
  //     this.totalAmount = this.cartService.getTotalAmount();
  //   });
  // }





}


