import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  modalRef: BsModalRef;

  constructor() { }

  close(){
    this.modalRef.hide()
    this.modalRef = null;
  }
  
  logIn(){
   
  }
}
