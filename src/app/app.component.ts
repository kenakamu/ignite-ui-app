import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from './models/user';
import { ListComponent } from './list/list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('applist') listComponent: ListComponent;
  selectedUser: User;

  title = 'Ignite Ui App';

  constructor(private router: Router) {
  }

  onClickMenu(){
    window.alert("menu clicked");
  }

  onClickAdd(){
    this.router.navigate(['/new']);
  }

  onClickRefresh(){
    this.listComponent.load();
  }
}