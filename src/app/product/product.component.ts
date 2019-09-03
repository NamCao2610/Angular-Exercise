import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product =
  [
    {
      image :'assets/download.jpg',
      sp : 'Leaf Rake',
      code: 'gdn-0011',
      available: 'March 19,2006',
      price: '$19.95',
      star: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
    },
    {
      image :'assets/cart.jpg',
      sp : 'Garden Cart',
      code: 'gdn-0023',
      available: 'March 18,2006',
      price: '$32.99',
      star: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
    },
    {
      image :'assets/hammer.jpg',
      sp : 'Hammer',
      code: 'tbx-0048',
      available: 'May 21,2016',
      price: '$8.90',
      star: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
    },
    {
      image :'assets/saw.jpg',
      sp : 'Saw',
      code: 'tbx-0022',
      available: 'May 15,2016',
      price: '$11.55',
      star: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
    },
    {
      image :'assets/game.jpg',
      sp : 'Video Game Controller',
      code: 'gmg-0022',
      available: 'October 15,2015',
      price: '$35.55',
      star: "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
    }
  ]

}
