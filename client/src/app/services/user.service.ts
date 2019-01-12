import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    validateLogin(user: User){
		return this.http.post('/api/user/login',{
			username: user.username,
			password: user.password
		})
    }

    addUser(user: User){
		return this.http.post('/api/user/signUp',{
			username : user.username,
			password : user.password
		})
    }
    
    // /** GET hero by id once logging in */
    // getUser(user: User): Observable<User> {
    //     const url = `/api/user/login/${user.username}`;
    //     return this.http.get<User>(url);
    // }

    /** POST: add a new hero to the server */
    // addUser(user: User): Observable<User> {
    //     return this.http.post<User>(this.usersUrl, User, httpOptions).pipe(
    //     tap((user: User) => console.log(`added user w/ id=${user.username}`)),
    //     );
    // }

    // /** DELETE: delete the hero from the server */
    // deleteUser(user: User | string): Observable<User> {
    //     const id = typeof user === 'string' ? user : user.username;
    //     const url = `${this.usersUrl}/${id}`;
    //     return this.http.delete<User>(url, httpOptions).pipe(
    //     tap(_ => console.log(`deleted user id=${id}`)),
    //     );
    // }

    // /** PUT: update the user on the server */
    // updateUser(user: User): Observable<any> {
    //     return this.http.put(this.usersUrl, user, httpOptions).pipe(
    //     tap(_ => console.log(`updated user id=${user.username}`)),
    //     );
    // }
}
