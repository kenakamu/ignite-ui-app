import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IgxLabel, IgxInput, IgxAvatar, IgxToastModule, IgxToast, IgxDialogModule } from 'igniteui-angular/main';
import { UserService } from '../user/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  @ViewChild('toast') toast: IgxToast;
  public user: User;
  constructor( private route: ActivatedRoute, private router: Router,private userService: UserService ) {
  }

  ngOnInit() {
    // パラメーターの変更をモニタ
    this.route.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(
        (user) => {this.user = user;}
      );
    });
  }

  public save(){
    this.userService.save(this.user).subscribe(()=>{
      this.toast.show();
    });    
  }

  public delete(){
    this.userService.delete(this.user).subscribe(()=>{
      this.toast.message = "deleted";
      this.toast.show();
      this.router.navigate([`/`]);
    })
  }
}