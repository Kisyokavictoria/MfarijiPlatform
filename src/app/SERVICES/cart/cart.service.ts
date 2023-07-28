import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartinterface } from '../../INTERFACES/cartinterface';
import { BehaviorSubject, Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
//import { NotificationService } from '../notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
 //  private readonly minimumAmount = 100;



  // isCartCleared = false; 

  constructor() { }
  // Method to add item to the cart
  addItemToCart(item: any) {
    // if (item.price < this.minimumAmount) {
    //   item.price = this.minimumAmount;
    // }
    const isDuplicate = this.cartItems.some((cartItem) => cartItem.id === item.id);

    if (isDuplicate) {
      // Item already exists, so you can display an alert or handle the case as needed
      alert('Item already exists in the cart!');
      return;
    }

    this.cartItems.push(item);
    //emits updated items in the cart
    this.cartItemsSubject.next(this.cartItems);
    //stores the items in the local storage
    this.saveCartItems();
  }


  // Method to get the cart items as an Observable
  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }
  removeItemFromCart(item: any): void {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      //emits updated cart items
      this.cartItemsSubject.next(this.cartItems);
      this.saveCartItems();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);

    this.saveCartItems();
  }
  loadCartItems(): void {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.cartItemsSubject.next(this.cartItems);

    }
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    // this.cartItemsSubject.next(this.cartItems);
  }
  

  // getTotalAmount(): number {
  //   let totalAmount = 0;
  //   for (const item of this.cartItems) {
  //     totalAmount += item.price;
  //   }
  //   return totalAmount;
  // }
  

















  // private loadCartItems(): void {
  //   const storedCartItems = localStorage.getItem('cartItems');
  //   if (storedCartItems) {
  //     this.cartItems = JSON.parse(storedCartItems);
  //     this.cartItemsSubject.next(this.cartItems);

  //   }
  // }

  // private saveCartItems(): void {
  //   localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  //   this.cartItemsSubject.next(this.cartItems);
  // }



  // updateCartList(product : any){
  //   this.cartItems.push(...product);
  //   this.cartListSource.next(this.cartItems);
  //   this.notif.showSuccess('item added to cart', 'Added item')
  // }


  // addToCart(fundraisers: Cartinterface) {
  //   this.fundraisers.push(fundraisers);
  //   this.saveCartItems();
  // }
  // checkIfItemExists(itemId: number): boolean {
  //   return this.fundraisers.some(item => item.id === itemId);
  // }
  // getItems() {
  //   return this.fundraisers;
  // }
  // clearCart(): void {
  //   this.fundraisers = [];
  //   // this.isCartCleared = true;
  //   this.saveCartItems();
  // }
  // removeItem(fundraisersId: number): void {
  //   const index = this.fundraisers.findIndex(item => item.id === fundraisersId);
  //   if (index > -1) {
  //     this.fundraisers.splice(index, 1);
  //     this.saveCartItems();
  //   }



  // }

  // private loadCartItems(): void {
  //   const storedCartItems = localStorage.getItem('cartItems');
  //   if (storedCartItems) {
  //     this.cartItems = JSON.parse(storedCartItems);
  //     if (this.isCartCleared) {
  //       this.cartItems = []; // Clear the cart if isCartCleared is true
  //       this.saveCartItems(); // Save the empty cart state
  //     }
  //     this.isCartCleared = false; // Reset isCartCleared flag
  //   }
  //   const storedCartItems = localStorage.getItem('fundraisers');
  //   if (storedCartItems) {
  //     this.cartItems = JSON.parse(storedCartItems);
  //     if (this.cartItems.length === 0) {
  //       this.isCartCleared = true;
  //     }

  //   }

  // private saveCartItems(): void {
  //   if (this.cartItems.length === 0) {
  //     localStorage.removeItem('cartItems');
  //   } else {
  //     localStorage.setItem('cartItems', JSON.stringify(this.cartItems));

  //   }





  // //getting the total items in the cart and displaying them on the cart icon
  // getTotalItems(): number {
  //   return this.cartItems.length;
  // }










  // public cartItemList: any = []
  // public donationList = new BehaviorSubject<any>([]);
  // getDonations() {
  //   return this.donationList.asObservable();
  // }

  // setDonations(donation: any) {
  //   this.cartItemList.push(...donation);
  //   this.donationList.next(donation);


  // }
  // addtoCart( donation: any) {
  //   this.cartItemList.push(donation);
  //   this.donationList.next(this.cartItemList);
  //   this.getTotalPrice();

  // }
  // getTotalPrice(){
  //   let grandTotal = 0;
  //   this.cartItemList.map((a:any) =>{
  //     grandTotal += a.total;
  //   })
  // }
  // removeCartItem(donation: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(donation.id === a.id){
  //       this.cartItemList.splice(index, 1);
  //     }

  //   })
  // }
  // removeAllCartItem(){
  //   this.cartItemList =[]
  //   this.donationList.next(this.cartItemList);
  // }
}
