import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(SignupComponent);
  }

}
