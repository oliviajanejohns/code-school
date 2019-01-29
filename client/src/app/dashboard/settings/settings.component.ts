import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HelpComponent } from '../help/help.component';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  modalRef: BsModalRef;
  currentUser: User;

  constructor(
    private modalService: BsModalService,
    private userService: UserService,
    private router: Router,
  ) {
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  openModal() {
    this.modalRef = this.modalService.show(HelpComponent);
  }
  
  editUser() {
    this.userService.update(this.currentUser).subscribe(
      data => {
      this.router.navigate(['/dashboard']);
      });
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
