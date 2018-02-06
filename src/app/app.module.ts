import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Ignite UI モジュールの参照
import {
  IgxNavbarModule, IgxIconModule, IgxScrollModule, IgxAvatarModule,
  IgxLabelModule, IgxLabel, IgxInput, IgxDatePickerModule, IgxButtonModule, IgxRippleModule,
  IgxToastModule, IgxDialogModule, IgxCheckboxModule, IgxSwitchModule, IgxSliderModule, IgxRadioModule
　} from 'igniteui-angular/main';

// Hammer
import "hammerjs";
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UserService } from './user/user.service';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    IgxNavbarModule, // Ignite UI Navbar モジュールの追加
    IgxIconModule, // Ignite UI Icon モジュールの追加
    IgxScrollModule, // Ignite UI Scroll モジュールの追加
    IgxAvatarModule, // Ignite UI Avatar モジュールの追加
    IgxLabelModule, // Ignite UI Label モジュールの追加
    IgxInput, // Ignite UI Input の追加
    IgxDatePickerModule, // Ignite UI DatePicker モジュールの追加
    IgxButtonModule, // Ignite UI Button モジュールの追加
    IgxRippleModule, // Ignite UI Ripple モジュールの追加
    IgxToastModule, // Ignite UI Toast モジュールの追加    
    IgxDialogModule,　// Ignite UI Dialog モジュールの追加
    IgxCheckboxModule, // Ignite UI Checkbox モジュールの追加
    IgxSwitchModule, // Ignite UI Switch モジュールの追加
    IgxSliderModule,　// Ignite UI Slider モジュールの追加
    IgxRadioModule,　// Ignite UI Slider モジュールの追加
  ],
  providers: [UserService], // サービスをプロバイダに追加
  bootstrap: [AppComponent]
})
export class AppModule { }