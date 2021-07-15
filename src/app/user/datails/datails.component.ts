import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent implements OnInit {
  user: User;
  constructor(private userService: UsersService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['userFromResolver'];
  }

  submit(form: NgForm) {
    this.userService.updateUser(this.user).subscribe();
  }

}
