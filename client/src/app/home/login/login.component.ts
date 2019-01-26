import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import {ModalDirective} from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UserService ]

})
export class LoginComponent implements OnInit{
  public user: User;
  model: any = {};

  // modalRef: BsModalRef;
  modalDirective: ModalDirective;
  constructor( 
    private router: Router,
    public modalRef: BsModalRef,
    private authService: AuthenticationService,
    private alertService: AlertService
  ){  	
    this.user = new User();
  }
  
  ngOnInit(){ 
    // reset login status
    this.authService.logout();
  }

  close(){
    this.modalRef.hide();
  }

  validateLogin() {
  this.authService.login(this.user.username, this.user.password)
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
