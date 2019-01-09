import { Component, Inject, HostListener } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DOCUMENT } from "@angular/platform-browser";
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  modalRef: BsModalRef;
  title = 'code-space';
  public scrolled: boolean = true;
  
  constructor(
    private modalService: BsModalService,
    @Inject(DOCUMENT) private doc: Document
    ) {}

    @HostListener("window:scroll", [])
    onWindowScroll() {
    let number = this.doc.documentElement.scrollTop || this.doc.body.scrollTop || 0;
    if ( number > 50 ) {
        this.scrolled = true;


    } else {
        this.scrolled = false;
    }
  }

  openSignupModal() {
    this.modalRef = this.modalService.show(SignupComponent);
  }

  openLoginModal() {
    this.modalRef = this.modalService.show(LoginComponent);
  }

  close(){
    this.modalRef.hide()
    this.modalRef = null;
  }
}
