import { Component, OnInit } from '@angular/core';

// declare function runit(): any;

@Component({
  selector: 'coding-component',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent {
  public count = 0;

  constructor() { }

  next(){
    if(this.count<11){
      this.count++;
      console.log(this.count);
    }
  }

  back(){
    if(this.count>=0){
      this.count--;
      console.log(this.count);
    }
  }

}
