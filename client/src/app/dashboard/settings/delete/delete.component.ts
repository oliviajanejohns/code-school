import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent{
  currentUser: User;

  constructor(
    public modalRef: BsModalRef,
    private userService: UserService,
    private router: Router
    ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    
  close(){
    this.modalRef.hide();
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
