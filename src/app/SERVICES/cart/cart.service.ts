import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartinterface } from '../../INTERFACES/cartinterface';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationService } from '../notifications/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 // cartItems: Cartinterface[] = [];
  // private cartListSource = new BehaviorSubject<any>([]);
  // public cartList$ = this.cartListSource.asObservable();
  private cartItems: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  
  // isCartCleared = false; 

  constructor(private notif: NotificationService) {}
  // Method to add item to the cart
  addItemToCart(item: any) {
    this.cartItems.push(item);
    this.cartItemsSubject.next(this.cartItems);
  }

  // Method to get the cart items as an Observable
  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

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
  //   const storedCartItems = localStorage.getItem('fundraisers');
  //   if (storedCartItems) {
  //     this.fundraisers = JSON.parse(storedCartItems);
  //     // if (this.isCartCleared) {
  //     //   this.fundraisers = []; // Clear the cart if isCartCleared is true
  //     //   this.saveCartItems(); // Save the empty cart state
  //     // }
  //     // this.isCartCleared = false; // Reset isCartCleared flag
  //   }
  //   // const storedCartItems = localStorage.getItem('fundraisers');
  //   // if (storedCartItems) {
  //   //   this.fundraisers = JSON.parse(storedCartItems);
  //   // if (this.fundraisers.length === 0) {
  //   //   this.isCartCleared = true;
  //   // }

  // }

  // private saveCartItems(): void {
  //   // if (this.fundraisers.length === 0) {
  //   //   localStorage.removeItem('fundraisers');
  //   // } else {
  //     localStorage.setItem('fundraisers', JSON.stringify(this.fundraisers));
  
  // }
 

  // //getting the total items in the cart and displaying them on the cart icon
  // getTotalItems(): number {
  //   return this.fundraisers.length;
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
