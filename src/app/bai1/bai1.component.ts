import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  student=
  {
    fullname:'Nguyen van Teo',
    birthday:'20-10-2000',
    gender:'Nam',
    photo:'../assets/bts.jpg',
    mark: 8.5 
  }

}
