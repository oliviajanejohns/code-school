import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'signup-modal',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  modalRef: BsModalRef;

  public user : User;
  
  constructor(
    private modalService: BsModalService,
    private userService: UserService
    ) {
      this.user = new User()
    }

  close(){
    this.modalRef.hide()
    this.modalRef = null;
  }

  // signUp(id){
  //   this.userService.addUser(id).subscribe(
  //       user => {this.user = user}, 
  //       err => console.error(err),
  //       () => console.log('added user')
  //     );
  // }
}
