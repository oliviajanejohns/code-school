import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(HelpComponent);
  }

}
