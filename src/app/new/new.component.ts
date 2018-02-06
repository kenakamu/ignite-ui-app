import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, Gender } from '../models/user';
import { UserService } from '../user/user.service';
import { IgxLabel, IgxInput, IgxAvatar, IgxToast, IgxDialog, IgxCheckbox, IgxSwitch, IgxSlider, IgxRadio } from 'igniteui-angular/main';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {   
  }

  @ViewChild('toast') toast: IgxToast;
  public user: User;
  public gender: string[];

  ngOnInit() {
    this.user = new User("", "", 0, null, Gender.Other, 0, true);
    // Gender を配列から取得
    let genderValues = Object.keys(Gender);
    this.gender = genderValues.slice(genderValues.length / 2);
  }

  public loadImage(input: HTMLInputElement): void {
    if (!input.value) {
      return;
    }

    let reader = new FileReader();
    // Callback when file read.
    reader.onload = () => {
      input.value = "";
      this.user.image = reader.result;
    }

    reader.readAsDataURL(input.files[0]);
  }

  public create() {
    this.userService.add(this.user).subscribe(() => {
      // 作成したらトーストを出してルートに遷移
      this.toast.show();
      this.router.navigate([`/`]);
    });
  }
}