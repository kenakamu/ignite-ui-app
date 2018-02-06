import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Detail コンポーネントの追加
import { DetailComponent } from './detail/detail.component'; 
import { NewComponent } from './new/new.component'; 

const routes: Routes = [
  // detail をパスとして指定したら Detail コンポーネントを表示。idがパラメーター
  { path: 'detail/:id', component: DetailComponent },
  // new をパスとして指定したら New コンポーネントを表示
  { path: 'new', component: NewComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }