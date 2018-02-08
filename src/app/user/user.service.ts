import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User, Gender } from '../models/user'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  private users: Array<User>;
  // 通知用に一つ Subject を用意
  private userUpdate = new Subject<string>()
  public userUpdateSource$ = this.userUpdate.asObservable();

  constructor() {
    this.users = new Array<User>();
    for (let i = 1; i <= 22; i++) {
      let birthdate = new Date(2018, 0, i);
      let backgrounImage = "http://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg";
      if( i % 4 == 1){
        backgrounImage = "http://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg";
      }
      else if (i%4 == 2){
        backgrounImage = "http://www.infragistics.com/angular-demos/assets/images/card/media/monuments.jpg";
      }
      else if (i%4 == 3){
        backgrounImage = "http://www.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg";
      }
      this.users.push(new User(
        `http://www.infragistics.com/angular-demos/assets/images/avatar/${i}.jpg`,
        "User: " + i,
        i,
        birthdate,
        Gender.Other,
        i,
        true,
        backgrounImage
      ));
    }
  }

  getUsers(): Observable<User[]> {
    return of(this.users)
  }

  getUser(id: number): Observable<User> {
    return of(this.users.find(x => x.id === +id));
  }

  add(user: User): Observable<boolean> {
    this.users.push(user);
    // 追加したことを通知
    this.userUpdate.next("updated");
    return of(true);
  }

  save(user: User): Observable<boolean> {
    let index = this.users.indexOf(user);
    if (index !== -1) {
      this.users[index] = user;
      return of(true);
    }
    else {
      return of(false);
    }
  }

  delete(user: User): Observable<boolean> {
    let index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      // 削除したことを通知
      this.userUpdate.next("updated");
      return of(true);
    }
    else {
      return of(false);
    }
  }
}