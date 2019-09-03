import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student=[
  {
    fullname: 'Nguyen van Teo',
    birthday: '26-10-2000',
    gender: 'Nam',
    photo: 'assets/cac.jpg',
    mark: 8.5
  },
  {
    fullname: 'Nguyen Jungkook',
    birthday: '24-10-2000',
    gender: 'Nu',
    photo: 'assets/bts.jpg',
    mark: 8
  },
  {
    fullname: 'Nguyen Van Vi',
    birthday: '26-7-2000',
    gender: 'Nam',
    photo: 'assets/sucvat.jpg',
    mark: 8.5
  }
]

}
