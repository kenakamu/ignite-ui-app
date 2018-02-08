import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ListModule } from './list/list.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { UserService } from './user/user.service';

// Ignite UI モジュールの参照
import {
  IgxNavbarModule, IgxIconModule, NavigationDrawerModule,
  IgxGridModule, IgxAvatarModule, IgxCardModule, IgxButtonModule, IgxRippleModule
} from 'igniteui-angular/main';

// Hammer
import "hammerjs";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ListModule,
    IgxNavbarModule, // Ignite UI Navbar モジュールの追加
    IgxIconModule, // Ignite UI Icon モジュールの追加   
    NavigationDrawerModule, // Ignite UI Drawer モジュールの追加
    IgxGridModule.forRoot(), // Ignite UI Grid モジュールの追加
    IgxAvatarModule, // Ignite UI Avatar モジュールの追加
    IgxCardModule, // Ignite UI Card モジュールの追加
    IgxButtonModule, // Ignite UI Button モジュールの追加
    IgxRippleModule, // Ignite UI Ripple モジュールの追加
  ],
  providers: [UserService], // サービスをプロバイダに追加
  bootstrap: [AppComponent]
})
export class AppModule { }