import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartinterface } from '../INTERFACES/cartinterface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  fundraisers: Cartinterface[] = []
  // isCartCleared = false;

  constructor() {
    this.loadCartItems();


  }
  

  addToCart(fundraisers: Cartinterface) {
    this.fundraisers.push(fundraisers);
    this.saveCartItems();
  }
  checkIfItemExists(itemId: number): boolean {
    return this.fundraisers.some(item => item.id === itemId);
  }
  getItems() {
    return this.fundraisers;
  }
  clearCart(): void {
    this.fundraisers = [];
    // this.isCartCleared = true;
    this.saveCartItems();
  }
  removeItem(fundraisersId: number): void {
    const index = this.fundraisers.findIndex(item => item.id === fundraisersId);
    if (index > -1) {
      this.fundraisers.splice(index, 1);
      this.saveCartItems();
    }



  }

  private loadCartItems(): void {
    const storedCartItems = localStorage.getItem('fundraisers');
    if (storedCartItems) {
      this.fundraisers = JSON.parse(storedCartItems);
      // if (this.isCartCleared) {
      //   this.fundraisers = []; // Clear the cart if isCartCleared is true
      //   this.saveCartItems(); // Save the empty cart state
      // }
      // this.isCartCleared = false; // Reset isCartCleared flag
    }
    // const storedCartItems = localStorage.getItem('fundraisers');
    // if (storedCartItems) {
    //   this.fundraisers = JSON.parse(storedCartItems);
    // if (this.fundraisers.length === 0) {
    //   this.isCartCleared = true;
    // }

  }

  private saveCartItems(): void {
    // if (this.fundraisers.length === 0) {
    //   localStorage.removeItem('fundraisers');
    // } else {
      localStorage.setItem('fundraisers', JSON.stringify(this.fundraisers));
    
  }
  // localStorage.setItem('fundraisers', JSON.stringify(this.fundraisers));





































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
