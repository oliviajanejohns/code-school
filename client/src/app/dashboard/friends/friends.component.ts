import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],

})
export class FriendsComponent implements OnInit{
  // modalRef: BsModalRef;
  users: User[] = [];
  asyncSelected: string;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;
  currentUser: User;

  constructor(public modalRef: BsModalRef,
    private router: Router,
    private userService: UserService) {
      this.dataSource = Observable.create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelected);
      })
      .pipe(
        mergeMap((token: string) => this.getUsersAsObservable(token))
      );
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    getUsersAsObservable(token: string): Observable<any> {
    const query = new RegExp(token, 'i');
  
    return of(
      this.users.filter((user: User) => {
        return query.test(user.email);
      })
    );
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.userService.addFriend(this.currentUser, e.value).subscribe(
      data => {
      this.router.navigate(['/dashboard']);
        this.close();
        window.location.reload();
      });;
  }
    
  close(){
    this.modalRef.hide();
  }

  ngOnInit(){
    this.userService.getNonFriends(this.currentUser).subscribe(users => {this.users = users});
  }
}

