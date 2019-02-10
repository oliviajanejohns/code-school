import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { }
    
    create(user: User) {
      return this.http.post(appConfig.apiUrl + '/users/register', user);
    }

    getById(_id: string) {
      return this.http.get(appConfig.apiUrl + '/users/' + _id);
    }

    update(user: User) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
    }

    delete(_id: string) {
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
}