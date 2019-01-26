import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private authService: AuthenticationService,
    ) {}
  
  ngOnInit(){ 
    // reset login status
    this.authService.logout();
  }

  openModal() {
    this.modalRef = this.modalService.show(SignupComponent);
  }
}
