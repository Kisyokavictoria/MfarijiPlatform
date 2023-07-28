import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartinterface } from 'src/app/INTERFACES/cartinterface';
import { CartService } from 'src/app/SERVICES/cart/cart.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  implements OnInit{

  donations: Cartinterface[] = []

  ngOnInit(): void {
    this.donations = [
      { Image: '/assets/images/w1.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id:1 },
      { Image: '/assets/images/w2.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id:2 },
      { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', id:3 }
      
    ]
      
  }

  constructor(private router: Router, private cartService:CartService){}
  navigateToLogin(){
    this.router.navigate(['/login'])
}




addToCart(item:any){
  this.cartService.addItemToCart(item);
}


  // card = [
  //   { Image: '/assets/images/w1.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', heading: 'Help rebuild myself' },
  //   { Image: '/assets/images/w2.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', heading: 'Help rebuild myself' },
  //   { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', heading: 'Help rebuild myself' }
  // ]

}
