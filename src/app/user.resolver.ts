import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UsersService } from './users/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UsersService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = route.params['id'];
    return this.userService.getUser(1);
  }
}
