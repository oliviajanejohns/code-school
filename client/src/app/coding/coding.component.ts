import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

// declare function runit(): any;

@Component({
  selector: 'coding-component',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent {
  currentUser: User;

  constructor() 
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  public count = 0;

  next(){
    if(this.count<20){
      this.count++;
      console.log(this.count);
    }
  }

  back(){
    if(this.count>=1){
      this.count--;
      console.log(this.count);
    }
  }
  
  mainContent = '';

  setContent(value) {
    this.mainContent = value;
  }

}
