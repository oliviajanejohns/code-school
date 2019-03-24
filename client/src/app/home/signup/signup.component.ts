import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'signup-modal',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  public user : User;
  model: any = {};

  constructor(
    private userService: UserService,
    private router: Router,
    public modalRef: BsModalRef,
    public alertService: AlertService,
    public authService: AuthenticationService
    ) {
      this.user = new User();
    }

  close(){
    this.modalRef.hide()
  }

  signUp() {
    if(this.user.email && this.user.username && this.user.password){
      this.user.level = 1;
      this.user.points = 0;
      this.user.page = 0;
      this.user.friends = [];

      this.userService.create(this.user)
          .subscribe(
              data => {
                  this.login(this.user.username, this.user.password)
              },
              error => {
                  this.alertService.error(error);
              }
          );

      } else {
      alert('Username and Password are required');
    }
  }
  
login(username, password){
      this.authService.login(username, password)
      .subscribe(
        data => {
        this.router.navigate(['/dashboard']);
        this.close();
      },
      error => {
        this.alertService.error(error);
      });
    }
}  