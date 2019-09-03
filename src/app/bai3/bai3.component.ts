import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product=
  [
    {
      ID:'pd100',
      image : 'assets/laptop.jpg',
      name:'Laptop',
      price: 300000,
      quatity: 3,
      action : '<button type="button" class="btn btn-primary">Action</button><button type="button" class="btn btn-danger">Delete</button>'
    },
    {
      ID:'pd101',
      image : 'assets/iphone.jpg',
      name:'Mobile',
      price: 54000,
      quatity: 5,
      action : '<button type="button" class="btn btn-primary">Action</button><button type="button" class="btn btn-danger">Delete</button>'
    },
    {
      ID:'pd102',
      image : 'assets/desktop.jpg',
      name:'Television',
      price: 22000,
      quatity: 6,
      action : '<button type="button" class="btn btn-primary">Action</button><button type="button" class="btn btn-danger">Delete</button>'
    },
    {
      ID:'pd100',
      image : 'assets/tainghe.jpg',
      name:'Headphone',
      price: 1300,
      quatity: 3,
      action : '<button type="button" class="btn btn-primary">Action</button><button type="button" class="btn btn-danger">Delete</button>'
    }
  ]

 Tong()
 {
   let s=0;
   for(let i=0; i<this.product.length;i++)
   {
     s=s+this.product[i].price*this.product[i].quatity;
   }
   return s;
 }
 Tang(id)
 {
   let s =0;
   for(let i =0; i<this.product.length; i++)
   {
     if(this.product[i].ID == id)
     {
       s=this.product[i].quatity++;
     }
   }
   return s;
 }

}
