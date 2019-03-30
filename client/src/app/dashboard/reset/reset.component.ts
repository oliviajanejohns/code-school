import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{
  currentUser: User;
  count: number;
  points: number;
  level: number;

  constructor(
    public modalRef: BsModalRef,
    private userService: UserService,
    private router: Router
    ) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

    ngOnInit(){
      this.count = 0;
      this.level = 1;
      this.points = 0;
    }    
    close(){
      this.modalRef.hide();
    }
    reset(){
      this.currentUser.page = this.count;
      this.currentUser.points = this.points;
      this.currentUser.level = this.level;
  
      this.userService.update(this.currentUser).subscribe(
        data => {
        });
        window.location.reload();
  
    }

}

