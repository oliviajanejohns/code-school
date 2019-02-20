import { Component, OnInit } from '@angular/core';
import { HelpComponent } from './help/help.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../models/user.model';
import {Router} from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { UserService } from '../services/user.service';

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

  mobile = false;
  count: number;

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
    this.count = 0;
  }

  private loadFriends(user: User) {
      this.userService.getFriends(user).subscribe(users => { this.users = users; });
      
      this.users.sort(function(user1, user2){
        return user2.points - user1.points;
      }); 
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
    this.currentUser.page = this.count;
    this.edit(this.currentUser, this.count);
  }

  edit(currentUser: User, count: number) {
    this.userService.addPage(currentUser, count).subscribe(
      data => {
      })       
  }
}


