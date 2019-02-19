import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

declare function check1(): any;
declare function resetDefault(): any;
declare const result: any;

@Component({
  selector: 'coding-component',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})

export class CodingComponent implements OnInit{
  currentUser: User;
  count: number;

  constructor(
    public userService: UserService,
    private router: Router
  ) 
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit(){ 
    this.count = this.currentUser.page;
  }

  checkCode(){
    if(this.count==6){
      check1();
      if(check1()){
        console.log("")
        result == true;
        this.count=7;
        console.log(this.count);
      }
      else{
        this.count=6;
        console.log("hi");
        console.log(this.count);
      }
    }
  }

  reset(){
    if(this.count==6){
      window.location.reload();
    }
    else{
      resetDefault();
    }
  }


  next(){
    const level = this.currentUser.level;
    switch(level){
      case 1: {  
        if(this.count >=0 && this.count <=4){
            this.count++;
        }
        else if(this.count == 5){
            this.count++;
            this.currentUser.page = 6;
            this.edit(this.currentUser, this.count); 
        }
      }
      case 2: {
        if(this.count >=7 && this.count <=11){
            this.count++;
        }
        else {
            this.count == 12;
        }
      }

    }
  }

  back(){
    const level = this.currentUser.level;
    switch(level){
      case 1: {  
        if(this.count>=0 && this.count <=5){
            this.count--;
        }
        else {
          this.count == 6;
        }
      }
      case 2: {
        if(this.count >=7 && this.count <=11){
          this.count--;
        }
        else {
          this.count == 12;
        }
      }

    }
  }

  mainContent = '';

  setContent(value) {
    this.mainContent = value;
  }

  edit(currentUser: User, count: number) {
    this.userService.addPage(currentUser, count).subscribe(
      data => {
        window.location.reload();
      })       
        this.count++;
  }
}