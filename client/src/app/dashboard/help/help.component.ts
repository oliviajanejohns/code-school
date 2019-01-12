import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  // modalRef: BsModalRef;

  constructor(public modalRef: BsModalRef
    ) {}
    
  close(){
    this.modalRef.hide();
  }
}
