import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formGroup: FormGroup;
  users: User[];

  constructor(private usersService: UsersService) {
    usersService.getUsers().subscribe((response: User[]) =>
      this.users = response);
  }

  ngOnInit(): void {
    this.createForm();
  }

  updateUser() {
    var user = this.users[0];
    user.name = "Jan Kowalski";
    this.usersService.updateUser(user).subscribe();
  }

  deleteUser(id: number) {

    this.users = this.users.filter(u => u.id !== id);
    this.usersService.deleteUser(id).subscribe();
  }

  createForm() {
    this.formGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'emai': new FormControl(null, Validators.required)
    });
  }

  submit() {

  }
}