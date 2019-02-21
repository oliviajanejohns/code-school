import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

declare function check1(): any;
declare function resetDefault(): any;
declare var result: any;


@Component({
  selector: 'coding-component',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})

export class CodingComponent implements OnInit{
  currentUser: User;
  count: number;
  level: number;
  points: number;

  correct: boolean = false;

  constructor(
    public userService: UserService,
    private router: Router
  ) 
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }
  
  ngOnInit(){ 
    this.count = this.currentUser.page;
    this.level = this.currentUser.level;
    this.points = this.currentUser.points;

  }

  checkCode(){
    if(this.currentUser.page == 6){
      this.check();
    }
    else if(this.currentUser.page == 12){
      this.check();
    }
  }

  async check(){
    await check1().then(() => {
      if(!result){
        this.correct = true;
        console.log(this.correct);
      }
      else{
        this.correct = false;
        console.log(this.correct);
      }
    });
  }

  reset(){
    if(this.count==6){
      window.location.reload();
    }
    else if(this.count==12){
      window.location.reload();
    }
    else if(this.count == 17){
      window.location.reload();
    }
    else if(this.count == 22){
      window.location.reload();
    }
    else if(this.count == 26){
      window.location.reload();
    }
    else {
      resetDefault();
    }
  }

  next(){
    switch(this.level){
      case 1: {  
        if(this.count >=0 && this.count <=4){
            this.count++;
        }
        else if(this.count == 5){
            // this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 6 && this.correct == true){
            // this.count++;
            this.edit(this.currentUser, this.count); 
            this.correct = false;
        }
      }
      case 2: {
        if(this.count >=7 && this.count <=10){
            this.count++;
        }
        else if(this.count == 11){
            // this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 12 && this.correct == true){
          // this.count++;
          this.edit(this.currentUser, this.count); 
          this.editLevel(this.currentUser, this.level);
          this.editPoints(this.currentUser, this.points);
          this.correct = false;
        }
      }
      case 3: {
        if(this.count >=13 && this.count <=15){
            this.count++;
        }
        else if(this.count == 16){
            this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 17 && this.correct == true){
          this.count++;
          this.edit(this.currentUser, this.count); 
          this.correct = false;
        }
      }


    }
  }

  back(){
    switch(this.level){
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
    this.userService.addPage(currentUser, count++).subscribe(
      data => {
        this.count++;
        this.currentUser.page = this.count;
        window.location.reload();
      })       
  }

  editLevel(currentUser: User, level: number) {
    this.userService.addLevel(currentUser, level++).subscribe(
      data => {
        this.level++
        this.currentUser.level = this.level;
      })       
  }

  editPoints(currentUser: User, points: number) {
    this.points = this.points + 500;
    this.currentUser.points = this.points;
    this.userService.addPoints(currentUser, points).subscribe(
      data => {
      
      })       
  }
}