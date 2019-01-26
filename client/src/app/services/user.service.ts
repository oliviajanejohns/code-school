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
}