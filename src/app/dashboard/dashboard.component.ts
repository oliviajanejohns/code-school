import { Component } from '@angular/core';
import { HelpComponent } from './help/help.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
  
  openModal() {
    this.modalRef = this.modalService.show(HelpComponent);
  }
}


