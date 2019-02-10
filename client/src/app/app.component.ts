import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DOCUMENT } from "@angular/platform-browser";
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  modalRef: BsModalRef;
  title = 'code-space';
  public scrolled: boolean = true;
  currentUser: User;

  constructor(
    private modalService: BsModalService,
    private authService: AuthenticationService,
    private router: Router,
    @Inject(DOCUMENT) private doc: Document
    ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
    let number = this.doc.documentElement.scrollTop || this.doc.body.scrollTop || 0;
    if ( number > 50 ) {
        this.scrolled = true;


    } else {
        this.scrolled = false;
    }
  }

  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    // remove user from local storage to log user out
    this.authService.logout();
    this.router.navigate(['/']);
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
