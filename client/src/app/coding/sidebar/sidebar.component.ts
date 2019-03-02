import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { HelpComponent } from 'src/app/dashboard/help/help.component';
import { CodingComponent } from '../coding.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  modalRef: BsModalRef;
  show: boolean;
  constructor(   
    private modalService: BsModalService,
    private CodingComponent: CodingComponent
    ) { }

  ngOnInit() {
  }
  openModal() {
    this.modalRef = this.modalService.show(HelpComponent);
  }
  close(){
    this.CodingComponent.show = false;
  }
}
