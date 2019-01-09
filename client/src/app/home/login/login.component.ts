import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UserService ]

})
export class LoginComponent {
  public user: User;

  modalRef: BsModalRef;

  constructor( 
    private userService: UserService,  
    private router: Router
  ){  	
    this.user = new User();
  }

  close(){
    this.modalRef.hide()
    this.modalRef = null;
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		this.userService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['dashboard/:id']);
        } else {
          alert('Wrong username or password');
        }
        
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }
}
