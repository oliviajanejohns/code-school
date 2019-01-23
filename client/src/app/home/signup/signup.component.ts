import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-modal',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  public user : User;

  constructor(
    private userService: UserService,
    private router: Router,
    public modalRef: BsModalRef,
    ) {
      this.user = new User()
    }

  close(){
    this.modalRef.hide()
  }

  signUp() {
    if(this.user.username && this.user.password){
        this.userService.addUser(this.user).subscribe(res =>{
            console.log('response is ', res);
            this.router.navigate(['dashboard/']);
            this.close();
        }); 
    } else {
        alert('Username and Password are required');
    }
  }
}
