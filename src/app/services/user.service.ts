import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
    private usersUrl = 'dashboard';

    constructor(private http: HttpClient) { }

    /** GET hero by id once logging in */
    getUser(id: string): Observable<User> {
        const url = `${this.usersUrl}/${id}`;
        return this.http.get<User>(url);
    }

    //////// Save methods //////////
    /** POST: add a new hero to the server */
    addUser (user: User): Observable<User> {
        return this.http.post<User>(this.usersUrl, User, httpOptions).pipe(
        tap((user: User) => console.log(`added user w/ id=${user.id}`)),
        );
    }

    /** DELETE: delete the hero from the server */
    deleteUser (user: User | string): Observable<User> {
        const id = typeof user === 'string' ? user : user.id;
        const url = `${this.usersUrl}/${id}`;
        return this.http.delete<User>(url, httpOptions).pipe(
        tap(_ => console.log(`deleted user id=${id}`)),
        );
    }

    /** PUT: update the user on the server */
    updateUser (user: User): Observable<any> {
        return this.http.put(this.usersUrl, user, httpOptions).pipe(
        tap(_ => console.log(`updated user id=${user.id}`)),
        );
    }
}
