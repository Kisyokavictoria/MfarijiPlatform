import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cartinterface } from 'src/app/INTERFACES/cartinterface';
import { CartService } from 'src/app/SERVICES/cart/cart.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  ngOnInit(): void {
    
  this.donations = [
    { Image: '/assets/images/w1.png', content: 'Give aid to simon so that he can get a heart transplant medication and get his life back', id: 1 },
    { Image: '/assets/images/w2.png', content: 'help camel manage her farm in makueniand take the kinds to school after their fathers death', id: 2 },
    { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 3 },
    { Image: '/assets/images/w4.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 4 },
    { Image: '/assets/images/w5.png', content: 'help camel manage his farm in makueni and take the kinds to school after their fathers death', id: 5 },
    { Image: '/assets/images/w6.png', content: 'Help kali boost his salon business after a fire outbraek that damaged her businesworth 300,000  to get back to  his nomal life', id: 6 },
    { Image: '/assets/images/w7.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 7 },
    { Image: '/assets/images/w8.png', content: 'support  James finish his home construction project after his wife died in a fire accident ', id: 8 },
    { Image: '/assets/images/w9.png', content: 'Help mercy finish her  child school fees so that she can graduate start her career as a teacher after her fathers death who was the bread winner', id: 9 },
    { Image: '/assets/images/w10.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 10 },
    { Image: '/assets/images/w11.png', content: 'Help john get back to his life after a road accident which broke his car which was the only source of income as a driver', id: 11 },
    { Image: '/assets/images/w12.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 12 },
    { Image: '/assets/images/w13.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 13 },
    { Image: '/assets/images/w14.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 14 },
    { Image: '/assets/images/w2.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 15 },
    { Image: '/assets/images/w8.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 16 },
    { Image: '/assets/images/w5.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 17 },
    { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueni and take the kinds to school after their fathers death', id: 18 }


  ]


  }
  constructor(private cartService: CartService, private router: Router) { }
  navigatefundraiser(){
    this.router.navigate(['login'])
}

 donations: Cartinterface [] = []

 addToCart(item: any) {
  this.cartService.addItemToCart(item);
}




  cards:any[]=[];
  cardsToShow: number = 9;
  cardsToLoad: number =9;

  loadMoreCards(){
    if(this.cardsToLoad >= this.cardsToShow){
      this.cardsToShow += this.cardsToLoad;

    }
    else{
      alert('No more data to show');
    }
   
  }


  // addToCart(fundraisers: Cartinterface) {
  //   const isDuplicate = this.cartService.checkIfItemExists(fundraisers.id);
  //   if (isDuplicate) {
  //     window.alert('Item already exists in the cart');
  //     return;
  //   }
  
  //   this.cartService.addToCart(fundraisers);
  //   // window.alert("The donation has been added to the cart!");
  // }







}
