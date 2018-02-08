import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user/user.service';
import { IgxAvatar } from 'igniteui-angular/main';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private users: User[] = new Array<User>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => this.users = users);
  }
  private openUrl(url: string): void {
    window.location.href = url;
}
}
