import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private usersService: UsersService) {
    usersService.getUsers().subscribe((response: User[]) =>
      this.users = response);
  }

  ngOnInit(): void {
  }

  updateUser() {
    var user = this.users[0];
    user.name = "Jan Kowalski";
    this.usersService.updateUser(user).subscribe();
  }

  @Output() deleteUser(id: number) {

    this.users = this.users.filter(u => u.id !== id);
    this.usersService.deleteUser(id).subscribe();
  }
}