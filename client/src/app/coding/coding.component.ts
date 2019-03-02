import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  show: boolean = false;
  modalRef: BsModalRef;

  correct: boolean = false;

  constructor(
    public userService: UserService,
    private router: Router,
    private modalService: BsModalService,
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
    else if(this.currentUser.page == 17){
      this.check();
    }
    else if(this.currentUser.page == 22){
      this.check();
    }
    else if(this.currentUser.page == 28){
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
            this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 6 && this.correct == true){
          this.points = this.points + 500;
          this.level++;
          this.count++;
          this.currentUser.points = this.points;
          this.currentUser.level = this.level;
          this.currentUser.page = this.count;
          this.update();
        }
        else{
          this.count == 6;
        }
      }
      case 2: {
        if(this.count >=7 && this.count <=10){
            this.correct = false;
            this.count++;
        }
        else if(this.count == 11){
            this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 12 && this.correct == true){
          this.points = this.points + 500;
          this.level++;
          this.count++;
          this.currentUser.points = this.points;
          this.currentUser.level = this.level;
          this.currentUser.page = this.count;
          this.update();
        }
        else{
          this.count == 12;
        }
      }
      case 3: {
        if(this.count >=13 && this.count <=15){
            this.correct = false;
            this.count++;
        }
        else if(this.count == 16){
            this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 17 && this.correct == true){
          this.points = this.points + 500;
          this.level++;
          this.count++;
          this.currentUser.points = this.points;
          this.currentUser.level = this.level;
          this.currentUser.page = this.count;
          this.update();
        }
        else{
          this.count == 17;
        }
      }
      case 4: {
        if(this.count >=18 && this.count <=20){
            this.correct = false;
            this.count++;
        }
        else if(this.count == 21){
            this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 22 && this.correct == true){
          this.points = this.points + 500;
          this.level++;
          this.count++;
          this.currentUser.points = this.points;
          this.currentUser.level = this.level;
          this.currentUser.page = this.count;
          this.update();
        }
        else{
          this.count == 22;
        }
      }
      case 5: {
        if(this.count >=23 && this.count <=26){
            this.correct = false;
            this.count++;
        }
        else if(this.count == 27){
            this.count++;
            this.edit(this.currentUser, this.count); 
        }
        else if(this.count == 28 && this.correct == true){
          this.points = this.points + 500;
          this.level++;
          this.count++;
          this.currentUser.points = this.points;
          this.currentUser.level = this.level;
          this.currentUser.page = this.count;
          this.update();
        }
        else{
          this.count == 28;
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
      case 3: {
        if(this.count >=13 && this.count <=16){
          this.count--;
        }
        else {
          this.count == 17;
        }
      }
      case 4: {
        if(this.count >=18 && this.count <=21){
          this.count--;
        }
        else {
          this.count == 22;
        }
      }
      case 5: {
        if(this.count >=23 && this.count <=27){
          this.count--;
        }
        else {
          this.count == 28;
        }
      }
    }
  }

  mainContent = '';

  setContent(value) {
    this.mainContent = value;
  }

  edit(currentUser: User, count: number) {
    console.log('edit');
    this.currentUser.page = this.count;
    this.userService.addPage(currentUser, count).subscribe(
      data => {
        window.location.reload();
      })       
  }

  update(){    
    this.userService.update(this.currentUser).subscribe(
      data => {
        window.location.reload();
      });
  }

  toggle(){
    if(this.show == true){
      this.show = false;
    } 
    else{
      this.show = true;
    }
  }
}