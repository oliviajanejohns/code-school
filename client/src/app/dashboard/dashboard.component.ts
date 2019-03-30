import { Component, OnInit } from '@angular/core';
import { HelpComponent } from './help/help.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../models/user.model';
import {Router} from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { UserService } from '../services/user.service';
import { ResetComponent } from './reset/reset.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  modalRef: BsModalRef;
  currentUser: User;
  users: User[] = [];
  sortedArray: User[] = [];
  user: User;
  percent: number;
  mobile = false;
  count: number;
  points: number;
  level: number;

  constructor
  (
    private modalService: BsModalService,
    private userService: UserService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  ngOnInit(){
    this.loadFriends(this.currentUser);
  
    this.sortArray();

    this.count = 0;
    this.level = 1;
    this.points = 0;

    if(this.currentUser.level == 1){
      this.percent = 0
    }
    else if(this.currentUser.level==2){
      this.percent = 20
    }
    else if(this.currentUser.level==3){
      this.percent = 40
    }
    else if(this.currentUser.level==4){
      this.percent = 60
    }
    else if(this.currentUser.level==5){
      this.percent = 80
    }
    else if(this.currentUser.level==6){
      this.percent = 100
    }
  }

  loadFriends(user: User) {
      this.userService.getFriends(user).subscribe(users => { this.users = users.sort((user1, user2)  => 0 - (user1.points > user2.points ? 1 : -1)) });
      
      // this.users.sort((user1, user2)  => 0 - (user1.points > user2.points ? 1 : -1));
      // values.sort((a,b) => 0 - (a > b ? 1 : -1));

      // this.users.sort(function(user1, user2){
      //   return user2.points - user1.points;
      // }); 
      // this.users.sort((user1, user2)  => 0 - (user1.points > user2.points ? 1 : -1));
  }

  sortArray() {
    this.users.sort((user1, user2)  => 0 - (user1.points > user2.points ? 1 : -1));
    this.sortedArray = this.users.slice();
  }

  openModal() {
    this.modalRef = this.modalService.show(HelpComponent);
  }

  coding(){
    this.router.navigate(['/coding']);
  }

  openFriendsModal(){
    this.modalRef = this.modalService.show(FriendsComponent);
  }

  reset(){
  //   this.currentUser.page = this.count;
  //   this.currentUser.points = this.points;
  //   this.currentUser.level = this.level;

  //   this.userService.update(this.currentUser).subscribe(
  //     data => {
  //     });
  //     window.location.reload();

  // }
    this.modalRef = this.modalService.show(ResetComponent);
  }
}


