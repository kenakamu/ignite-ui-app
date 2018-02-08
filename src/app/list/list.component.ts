import { Component, OnInit, EventEmitter } from '@angular/core';
import { IgxScroll, IgxScrollEvent, IgxAvatar } from "igniteui-angular/main";
import { User } from '../models/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.load();
  }

  public users: User[] = new Array<User>();
  public visibleUsers: User[];
  public visibleUsersCount: number = 8;

  ngOnInit() {
    // 変更通知を受け取ったら再度データをロード
    this.userService.userUpdateSource$.subscribe(
      (user)=>{this.load();}
    )
  }

  public load():void{    
     // ユーザーをサービスから取得。非同期のため subscribe でデータ受け取り。
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
        this.visibleUsers = this.users.slice(0, this.visibleUsersCount);
      }
    );
  }

  private onItemSelect(user: User): void {
    // list/detail にナビゲート
    this.router.navigate([`/list/detail/${user.id}`]);
  }

  private updateList($event: IgxScrollEvent): void {    
    this.visibleUsers = this.users.slice($event.currentTop, $event.currentTop + this.visibleUsersCount);
  }
}