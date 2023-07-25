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

  }
  constructor(private cartService: CartService, private router: Router) { }
  navigatefundraiser(){
    this.router.navigate(['/startfundraiser'])
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


  donations = [
    { Image: '/assets/images/w1.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 1 },
    { Image: '/assets/images/w2.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 2 },
    { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 3 },
    { Image: '/assets/images/w4.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 4 },
    { Image: '/assets/images/w5.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 5 },
    { Image: '/assets/images/w6.png', content: 'Help kali boost her salon business after a fire outbraek that damaged her businesworth 300,000  to get back to  her nomal life', id: 6 },
    { Image: '/assets/images/w7.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 7 },
    { Image: '/assets/images/w8.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 8 },
    { Image: '/assets/images/w9.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 9 },
    { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 3 },
    { Image: '/assets/images/w4.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 4 },
    { Image: '/assets/images/w5.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 5 },
    { Image: '/assets/images/w6.png', content: 'Help kali boost her salon business after a fire outbraek that damaged her businesworth 300,000  to get back to  her nomal life', id: 6 },
    { Image: '/assets/images/w7.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 7 },
    { Image: '/assets/images/w8.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 8 },
    { Image: '/assets/images/w9.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id: 9 }


  ]

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
