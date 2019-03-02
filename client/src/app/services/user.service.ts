import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    create(user: User) {
      return this.http.post(appConfig.apiUrl + '/users/register', user);
    }

    getById(_id: string) {
      return this.http.get(appConfig.apiUrl + '/users/' + _id);
    }

    update(user: User) {
      console.log('update');
      localStorage.setItem('currentUser', JSON.stringify(user));
      return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
    }

    delete(_id: String) {
      return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }

    getFriends(user: User) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return this.http.get<User[]>(appConfig.apiUrl + '/users/' + user._id);
    }

    getAll() {
      return this.http.get<User[]>(appConfig.apiUrl + '/users');
    }

    addFriend(user: User, email: String) {      
      localStorage.setItem('currentUser', JSON.stringify(user));
      return this.http.put(appConfig.apiUrl + '/users/friends/', { _id: user._id, friends: email });
    }

    addPage(user: User, count: number) {      
      localStorage.setItem('currentUser', JSON.stringify(user));
      return this.http.put(appConfig.apiUrl + '/users/addPage', { _id: user._id , page: count });
    }

    getNonFriends(user: User){
      localStorage.setItem('currentUser', JSON.stringify(user));
      return this.http.get<User[]>(appConfig.apiUrl + '/users/search/' + user._id);
    }
}