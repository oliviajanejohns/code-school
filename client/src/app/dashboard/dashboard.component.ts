import { Component } from '@angular/core';
import { HelpComponent } from './help/help.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  modalRef: BsModalRef;
  currentUser: User;

  constructor(private modalService: BsModalService) 
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  openModal() {
    this.modalRef = this.modalService.show(HelpComponent);
  }
}


