import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { IgxNavbar, IgxIcon, NavigationDrawer } from 'igniteui-angular/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedUser: User;

  title = 'Ignite Ui App';

  constructor(private router: Router) {
  }

  onClickAdd(){
    // list/new を呼び出し
    this.router.navigate(['/list/new']);
  }
}