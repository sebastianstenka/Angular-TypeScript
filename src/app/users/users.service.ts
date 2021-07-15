import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) { }

  httpOpctions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user, this.httpOpctions);
  }


  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>("https://jsonplaceholder.typicode.com/users/" + id, this.httpOpctions);
  }
}
