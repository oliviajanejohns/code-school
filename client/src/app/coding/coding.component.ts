import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

// declare function runit(): any;

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
    const correct: boolean = false;
    console.log(this.currentUser.page);
  }


  next(){
    const level = this.currentUser.level;
    switch(level){
      case 1: {  
        if(this.count >=0 && this.count <=5){
            this.count++;
            console.log(this.count);
        }
        else {
          this.count == 6;
          // this.editUser();
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
            console.log(this.count);

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

  // editUser() {
  //   this.userService.update(this.currentUser).subscribe(
  //     data => {
  //     this.router.navigate(['/coding']);
  //     });
  //   }
}