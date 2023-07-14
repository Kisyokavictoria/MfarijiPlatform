import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  cards = [
    { Image: '/assets/images/w1.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', heading: 'Help rebuild myself' },
    { Image: '/assets/images/w2.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', heading: 'Help rebuild myself' },
    { Image: '/assets/images/w3.png', content: 'help camel manage her farm in makueniand te the kinds to school aftertheir faters death', heading: 'Help rebuild myself' }
  ]

}
