import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user/user.service';
import { IgxIcon, IgxAvatar } from 'igniteui-angular/main';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  private users: User[] = new Array<User>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => this.users = users);
  }
}